let map = L.map('map');

let basemapLayer = L.tileLayer('https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png', {
    maxZoom: 18,
    minZoom: 13,
    subdomains: ['maps1', 'maps2', 'maps3']
});

let luftbildLayer = L.tileLayer('https://{s}.stadt-salzburg.at/geodaten/wmts/orthofoto-20190321/normal/google3857/{z}/{y}/{x}.jpg', {
    maxZoom: 20,
    minZoom: 13,
    subdomains: ['maps1', 'maps2', 'maps3']
})

map.setView([47.8, 13.0333], 16);

luftbildLayer.addTo(map);

let control = L.control.layers({
    'Basemap': basemapLayer,
    'Luftbild': luftbildLayer
});
control.addTo(map);

fetch('features.json')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let features = data.features;

        let geoJSON = L.geoJSON(features, {
            onEachFeature: function (feature, layer) {
                // console.log(feature.properties);

                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                h2.innerText = feature.properties.NAME;

                div.appendChild(h2);

                for (let property in feature.properties) {
                    let value = feature.properties[property];

                    // console.log(property + ': ' + value);
                    // 'ID', 'ART', ...
                }

                layer.bindPopup(div);
            },
            style: function (feature) {
                return {
                    color: '#ff00000'
                };
            }
        });
        geoJSON.addTo(map);
    });

function onPositionSuccess(position) {
    let coords = position.coords;

    let latitude = coords.latitude;
    let longitude = coords.longitude;

    map.setView([latitude, longitude]);

    let circle = L.circle([latitude, longitude], {
        color: 'darkred',
        radius: coords.accuracy
    });

    circle.addTo(map);
}

function onPositionError(error) {
    console.log(error);
}

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError);
}