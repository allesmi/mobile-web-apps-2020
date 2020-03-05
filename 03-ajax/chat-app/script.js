// // // XMLHttpRequest
// // let httpRequest = new XMLHttpRequest();

// // httpRequest.onreadystatechange = function () {
// //     if (httpRequest.readyState === XMLHttpRequest.DONE) {
// //         if (httpRequest.status === 200) {
// //             console.log(httpRequest.responseText);
// //         } else {
// //             console.error('Ein Fehler ist passiert');
// //         }
// //     }
// // };

// // // Relativ zur angezeigten Webseite
// // // wenn http://www.unserserver.com/intro/index.html
// // // dann http://www.unserserver.com/intro/hello.txt
// // httpRequest.open('GET', 'hello.txt');


// // let url = 'http://172.20.12.50:3000/api/messages';

// // // POST mittels XHR
// // httpRequest.setRequestHeader('Content-Type', 'application/json');
// // httpRequest.open('POST', url);
// // httpRequest.send(JSON.stringify({
// //     name: "A",
// //     text: "Eine Nachricht"
// // }));

// // // POST mittels fetch
// // fetch(url, {
// //     method: 'POST',
// //     header: {
// //         'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //         name: "A",
// //         text: "Eine Nachricht"
// //     })
// // });

// // // // Relativ zum Server root
// // // // wenn http://www.unserserver.com/intro/index.html
// // // // dann http://www.unserserver.com/hello.txt
// // // httpRequest.open('GET', '/hello.txt');

// // // // Protokoll-relativ
// // // // wenn http://www.unserserver.com/intro/index.html
// // // // dann http://www.unserserver.com/hello.txt
// // // // wenn https://www.unserserver.com/intro/index.html
// // // // dann https://www.unserserver.com/hello.txt
// // // httpRequest.open('GET', '//www.unserserver.com/hello.txt');

// // // // Absolute URL
// // // httpRequest.open('GET', 'https://www.andererserver.com/hello.txt');

// // httpRequest.send();

// fetch('test.json')
//     .then(function (response) {
//         // 404 Resource not found
//         if (response.ok) {
//             return response.json();
//         } else {
//             console.error('Fehler');
//         }
//     })
//     .then(function (text) {
//         console.log(text);
//     });

// // let obj = {
// //     name: "Hans",
// //     alter: 12
// // };

// // console.log(obj);

// // let s = JSON.stringify(obj);

// // let obj2 = JSON.parse(s);

let userName = '';

// Event Handlers

function onUserNameChange(event) {
    userName = event.target.value;
    console.log('User name changed to', userName);
}

function onRefreshButtonClick(event) {
    console.log('onRefreshButtonClick');
}

function onSendButtonClick(event) {
    console.log('onSendButtonClick');
    console.log('Der User heißt ', userName);
}

function load() {
    // Set up event handlers
    const userNameInput = document.querySelector('#userNameInput');
    userNameInput.addEventListener('change', onUserNameChange);

    const refreshButton = document.querySelector('#refreshButton');
    refreshButton.addEventListener('click', onRefreshButtonClick);

    const sendButton = document.querySelector('#sendButton');
    sendButton.addEventListener('click', onSendButtonClick);
}

window.onload = load;