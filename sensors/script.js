// Welche Sensoren kann der Browser?
// https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs


const sensors = [
    'Gyroscope',
    'OrientationSensor'
];

for (let sensor of sensors) {
    let isAvailable;

    if (sensor in window) {
        isAvailable = true;
    }
    else {
        isAvailable = false;
    }

    console.log(sensor, isAvailable);
}

// Welche Sensoren dürfen wir auslesen?
navigator.permissions.query({ name: 'geolocation' })
    .then(function(result) {
        if (result.state === 'granted') {
            console.log('Wir sind berechtigt, die Geolocation abzufragen');
        }
        else if (result.state === 'prompt') {
            console.log('Der User wird noch gefragt, ob wir die Berechtigung bekommen');
        }
        else if (result.state === 'denied') {
            console.log('Wir sind nicht berechtigt, die Geolocation abzufragen');
        }
    });

// Welche Daten liefern die Sensoren?
if ('Gyroscope' in window) {
    let gyroscope = new Gyroscope({ frequency: 1 });

    gyroscope.addEventListener('reading', function(event) {
        console.log(event);
    });

    gyroscope.addEventListener('error', function(event) {
        console.log('error', event);
    });

    gyroscope.start();
}

// Auf Sensordaten reagieren

// AmbientLightSensor: Wenn die Umgebung dunkel ist, soll der Seitenhintergrund schwarz werden.
