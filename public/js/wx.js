import { getAlertColor } from '../js/getAlertColor.js'

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

    alerts.forEach(alert => {
        if (alert.geometry && alert.geometry.coordinates) {
            if (alert.geometry.type === 'Point') {
                const [longitude, latitude] = alert.geometry.coordinates;
                if (longitude !== null && latitude !== null) {
                    createAlertMarker([longitude, latitude], alert);
                }
            } else if (alert.geometry.type === 'Polygon' || alert.geometry.type === 'MultiPolygon') {
                addPolygonToMap(alert.geometry, alert);
            }
        }
    });
}

function addPolygonToMap(geometry, alert) {
    const alertColor = getAlertColor(alert.properties.event);
    let features = [];

    if (geometry.type === 'Polygon') {
        features.push({
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: geometry.coordinates // Exterior ring
            },
            properties: alert.properties
        });
    } else if (geometry.type === 'MultiPolygon') {
        geometry.coordinates.forEach((polygon) => {
            features.push({
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: polygon // Each exterior ring in the MultiPolygon
                },
                properties: alert.properties
            });
        });
    }

    map.addSource(`polygon-${alert.id}`, {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: features
        }
    });

    map.addLayer({
        id: `polygon-fill-${alert.id}`,
        type: 'fill',
        source: `polygon-${alert.id}`,
        paint: {
            'fill-color': alertColor,
            'fill-opacity': 0.3
        }
    });

    map.addLayer({
        id: `polygon-outline-${alert.id}`,
        type: 'line',
        source: `polygon-${alert.id}`,
        paint: {
            'line-color': alertColor,
            'line-width': 2
        }
    });

    map.on('click', `polygon-fill-${alert.id}`, (e) => {
        const coordinates = e.lngLat;
        const popup = new mapboxgl.Popup({ offset: 25 })
            .setLngLat(coordinates)
            .setHTML(`
                <h3>${alert.properties.headline}</h3>
                <p><strong>Severity:</strong> ${alert.properties.severity}</p>
                <button class="alert-popup-details-button">View Details</button>
            `)
            .addTo(map);
    });

    map.on('mouseenter', `polygon-fill-${alert.id}`, () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', `polygon-fill-${alert.id}`, () => {
        map.getCanvas().style.cursor = '';
    });
}

window.toggleRadarBtns = toggleRadarBtns;

initRadarSites();
addWeatherAlertsToMap();