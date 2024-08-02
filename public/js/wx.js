//hi github!! its a public api key or whatever
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
    const response = await fetch('https://api.weather.gov/radar/stations');
    const data = await response.json();
    return data.features;
}

function addRadarSiteBtn(longitude, latitude, id, name) {
    const radarSiteBtn = document.createElement('button');
    radarSiteBtn.className = 'radar-site-button';
    radarSiteBtn.innerHTML = id;

    radarSiteBtn.onclick = () => {
        if (selectedRadarBtn) {
            selectedRadarBtn.classList.remove('radar-site-button-selected');
        }
        radarSiteBtn.classList.add('radar-site-button-selected');
        selectedRadarBtn = radarSiteBtn;

        console.log('Selected Radar Site:', name, id, [longitude, latitude]);
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

initRadarSites();