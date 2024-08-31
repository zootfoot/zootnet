import { getAlertDetails } from '../js/getAlertDetails.js'

mapboxgl.accessToken = 'pk.eyJ1Ijoiem9vdGZvb3QiLCJhIjoiY2x6YXcwdnN4MHNpZDJtcHk5d2hjY2Q3YyJ9.VZD3RFi5OE8b4zA3gl6YVQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-98, 38],
    projection: 'mercator',
    zoom: 4
});

let selectedRadarBtn = null;
let radarBtnEnabled = true;

async function fetchRadarStations() {
    const response = await fetch('../json/stations.json');
    const data = await response.json();
    return data.features;
}

function addRadarSiteBtn(longitude, latitude, id, name) {
    const radarSiteBtn = document.createElement('button');
    radarSiteBtn.className = 'radar-site-button';
    radarSiteBtn.innerHTML = id;

    radarSiteBtn.onclick = async () => {
        if (selectedRadarBtn) {
            selectedRadarBtn.classList.remove('radar-site-button-selected');
        }
        radarSiteBtn.classList.add('radar-site-button-selected');
        selectedRadarBtn = radarSiteBtn;

        console.log('Selected Radar Site:', name, id, [longitude, latitude]);

        // Fetch and display reflectivity data
        await loadReflectivityData(id, longitude, latitude);
    };

    new mapboxgl.Marker(radarSiteBtn)
        .setLngLat([longitude, latitude])
        .addTo(map);
}

function toggleRadarBtns() {
    let menuBarBtnRadar = document.getElementById('menu-bar-button-radar')
    let radarBtns = document.getElementsByClassName('radar-site-button');

    if (radarBtnEnabled) {
        radarBtnEnabled = false

        menuBarBtnRadar.style.backgroundColor = 'rgba(0, 0, 0, 0)';

        for (let i = 0; i < radarBtns.length; i++) {
            radarBtns[i].style.visibility = 'hidden';
        }
    } else {
        radarBtnEnabled = true

        menuBarBtnRadar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

        for (let i = 0; i < radarBtns.length; i++) {
            radarBtns[i].style.visibility = 'visible';
        }
    }
}

async function initRadarSites() {
    const features = await fetchRadarStations();
    features.forEach(feature => {
        const [longitude, latitude] = feature.geometry.coordinates;
        const id = feature.properties.id;
        const name = feature.properties.name;
        addRadarSiteBtn(longitude, latitude, id, name);
    });
}

async function fetchWeatherAlerts() {
    const response = await fetch('https://api.weather.gov/alerts/active');
    const data = await response.json();
    return data.features;
}

async function addWeatherAlertsToMap() {
    const alerts = await fetchWeatherAlerts();
    const polygonFeatures = [];

    alerts.forEach(alert => {
        if (alert.geometry && (alert.geometry.type === 'Polygon' || alert.geometry.type === 'MultiPolygon')) {
            const alertColor = getAlertDetails(alert.properties.event).color;
            const features = createPolygonFeatures(alert.geometry, alert, alertColor);
            polygonFeatures.push(...features);
        }
    });

    map.on('load', () => {
        if (polygonFeatures.length > 0) {
            map.addSource('weather-alert-polygons', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: polygonFeatures
                }
            });

            map.addLayer({
                id: 'weather-alert-polygons-fill',
                type: 'fill',
                source: 'weather-alert-polygons',
                paint: {
                    'fill-color': ['get', 'alertColor'],
                    'fill-opacity': 0.3
                }
            });

            map.addLayer({
                id: 'weather-alert-polygons-outline',
                type: 'line',
                source: 'weather-alert-polygons',
                paint: {
                    'line-color': ['get', 'alertColor'],
                    'line-width': 2
                }
            });

            map.on('click', 'weather-alert-polygons-fill', (e) => {
                const coordinates = e.lngLat;
                const properties = e.features[0].properties;
                showPopup(coordinates, properties);
            });

            map.on('mouseenter', 'weather-alert-polygons-fill', () => {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'weather-alert-polygons-fill', () => {
                map.getCanvas().style.cursor = '';
            });
        }
    });
}

function createPolygonFeatures(geometry, alert, alertColor) {
    const features = [];

    if (geometry.type === 'Polygon') {
        features.push({
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: geometry.coordinates
            },
            properties: {
                alertColor: alertColor,
                event: alert.properties.event,
                headline: alert.properties.headline,
                severity: alert.properties.severity,
                details: alert.properties.description
            }
        });
    } else if (geometry.type === 'MultiPolygon') {
        geometry.coordinates.forEach(polygon => {
            features.push({
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: polygon
                },
                properties: {
                    alertColor: alertColor,
                    event: alert.properties.event,
                    headline: alert.properties.headline,
                    severity: alert.properties.severity,
                    details: alert.properties.description
                }
            });
        });
    }
    return features;
}

function showPopup(coordinates, properties) {
    const alertDetails = getAlertDetails(properties.event);
    const alertColor = alertDetails.color;
    const brightness = getBrightness(alertColor);
    const textColor = brightness < 128 ? 'white' : 'black';

    new mapboxgl.Popup({ offset: 25 })
        .setLngLat(coordinates)
        .setHTML(`
            <h3>${properties.headline}</h3>
            <p><strong>Severity:</strong> ${properties.severity}</p>
            <button style="background-color: ${alertColor}; color: ${textColor};" class="alert-popup-details-button">View Details</button>
        `)
        .addTo(map);
}

function getBrightness(rgbString) {
    const match = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    const [, r, g, b] = match.map(Number);
    return Math.round((r * 0.299) + (g * 0.587) + (b * 0.114));
}

window.toggleRadarBtns = toggleRadarBtns;

initRadarSites();
addWeatherAlertsToMap();