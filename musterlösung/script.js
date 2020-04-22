// 3a: AJAX

function showWords(words) {
    let list = document.querySelector('#ajax-output');
    list.innerHTML = '';

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        let li = document.createElement('li');
        li.innerText = word.short + ': ' + word.long;

        list.appendChild(li);
    }
}

function onAjaxClick() {
    fetch('words.json')
        .then(function (response) { return response.json(); })
        .then(function (wordsData) {
            let words = wordsData.words;
            showWords(words);
        })
        .catch(function (error) { console.log('Error during fetch:', error) });
}

let ajaxButton = document.querySelector('#ajax-button');
ajaxButton.addEventListener('click', onAjaxClick);

// 3b: Geolocation

function onGeolocationClick() {
    let supportDiv = document.querySelector('#geolocation-browser-support');
    let isSupported = ('geolocation' in navigator);
    let supportText;

    if (isSupported) {
        supportText = 'Der Browser unterstützt Geolocation.';
    }
    else {
        supportText = 'Der Browser unterstützt Geolocation nicht.';
    }
    supportDiv.innerText = supportText;

    let permissionDiv = document.querySelector('#geolocation-permission');

    navigator.permissions.query({ name: 'geolocation' })
        .then(function (result) {
            let permissionText;
            console.log(result.state)
            if (result.state === 'granted') {
                permissionText = 'Der User hat die Verwendung der Geolocation erlaubt.';
            }
            else if (result.state === 'prompt') {
                permissionText = 'Der User wird noch gefragt, ob er die Verwendung der Geolocation erlaubt oder ablehnt.';
            }
            else {
                permissionText = 'Der User hat die Verwendung der Geolocation abgelehnt.'
            }
            permissionDiv.innerText = permissionText;
        });

    let positionDiv = document.querySelector('#geolocation-position');

    if (isSupported) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let coordinates = position.coords;
            let lat = coordinates.latitude;
            let long = coordinates.longitude;
            let accuracy = coordinates.accuracy;

            positionDiv.innerText = 'Lat: ' + lat + ', Long: ' + long + ', Accuracy: ' + accuracy;
        }, console.log);
    }
}

let geolocationButton = document.querySelector('#geolocation-button');
geolocationButton.addEventListener('click', onGeolocationClick);