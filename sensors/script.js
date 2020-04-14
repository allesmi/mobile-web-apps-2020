// let output = document.querySelector('main');

// let sensors = [
//     'Accelerometer',
//     'AbsoluteOrientationSensor',
//     'AmbientLightSensor',
//     'LinearAccelerationSensor',
//     'RelativeOrientationSensor'
// ];

// for (let i = 0; i < sensors.length; i++) {
//     let sensor = sensors[i];

//     let div = document.createElement('div');
//     if (sensor in window) {
//         div.innerText = 'Sensor ' + sensor + ' ist dem Browser bekannt';
//     }
//     else {
//         div.innerText = 'Sensor ' + sensor + ' ist dem Browser nicht bekannt';
//     }

//     output.appendChild(div);
// }

// function queryPermissions(permission) {
//     navigator.permissions.query({ name: permission })
//         .then(function (result) {
//             let div = document.createElement('div');
//             if (result.state === 'granted') {
//                 div.innerText = 'Berechtigt zum Zugriff auf ' + permission;
//             }
//             else {
//                 div.innerText = 'Nicht berechtigt zum Zugriff auf ' + permission;
//             }
//             output.appendChild(div);
//         });
// }

// queryPermissions('accelerometer');
// queryPermissions('gyroscope');
// queryPermissions('ambient-light-sensor');

// let sensor = new Accelerometer({ frequency: 0.5 });

// sensor.onreading = function (sensorEvent) {
//     let div = document.createElement('div');
//     div.innerText = 'x: ' + sensorEvent.x + ', y: ' + sensorEvent.y + ', z: ' + sensorEvent.z;
//     output.appendChild(div);
// };

// sensor.onerror = function(errorEvent) {
//     let div = document.createElement('div');
//     div.innerText = 'Fehler beim Lesen des Sensors';
//     output.appendChild(div);
// };

// sensor.start();

function showSensorInformation(sensorName, permissionName) {
    let infoDiv = document.createElement('div');

    // 1. Browser
    let browserSupportDiv = document.createElement('div');

    if (sensorName in window) {
        browserSupportDiv.innerText = 'Sensor ' + sensorName + ' ist dem Browser bekannt';
    }
    else {
        browserSupportDiv.innerText = 'Sensor ' + sensorName + ' ist dem Browser nicht bekannt';
    }
    infoDiv.appendChild(browserSupportDiv);

    // 2. Permission
    let permissionDiv = document.createElement('div');
    navigator.permissions.query({ name: permissionName })
        .then(function (result) {
            if (result.state === 'granted') {
                permissionDiv.innerText = 'Berechtigt zum Zugriff auf ' + permissionName;
            }
            else {
                permissionDiv.innerText = 'Nicht berechtigt zum Zugriff auf ' + permissionName;
            }
        });
    infoDiv.appendChild(permissionDiv);

    // 3. Verwendung
    let outputDiv = document.createElement('div');
    infoDiv.appendChild(outputDiv);

    let button = document.createElement('button');
    button.innerText = 'Sensor starten';
    infoDiv.appendChild(button);

    let accelerometer = new Accelerometer({ frequency: 0.5 });

    accelerometer.addEventListener('reading', function (sensorEvent) {
        let text = '';
        for (let property in sensorEvent) {
            text += property + ': ' + sensorEvent[property];
        }
        outputDiv.innerText = text;
    });

    accelerometer.addEventListener('error', function (errorEvent) {
        outputDiv.innerHTML = errorEvent.error;
    });

    button.addEventListener('click', function () {
        accelerometer.start();
    });

    let main = document.querySelector('main');
    main.appendChild(infoDiv);
}

showSensorInformation('Accelerometer', 'accelerometer');
showSensorInformation('Gyroscope', 'gyroscope');


// chrome://flags/#enable-generic-sensor-extra-classes 
