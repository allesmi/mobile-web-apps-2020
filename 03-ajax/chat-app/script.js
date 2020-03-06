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

// // // http://172.20.12.50:3000/
// // // GET  http://172.20.12.50:3000/api/messages
// // // POST http://172.20.12.50:3000/api/messages   Send a message to the server
// // /*
// // {
// //     "name": "A",
// //     "text": "Eine Nachricht"
// // }
// // */

// fetch('http://172.20.12.50:3000/api/messages', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Alex',
//         text: 'Hallo Server'
//     })
// }).then(function (res) {
//     console.log(res)
// });

// // Ein Request wo am Server kein CORS Header gesetzt wird:
// fetch('http://172.20.12.50:3000/without-cors') // GET
//     .then(function (res) {
//         console.log(res);
//     });



function onRefreshButtonClick(event) {
    console.log('the refresh button was clicked');

    const chatWindow = document.querySelector('#chatWindow');

    fetch('http://172.20.12.50:3000/api/messages')
        .then(function(res) {
            return res.json();
        })
        .then(function(messages) {
            chatWindow.innerHTML = '';
            for (let message of messages) {
                // Erzeugen eines neuen DOM Element
                // Browser:
                const div = document.createElement('div');
                // jQuery:
                const $div = $('<div></div>');


                div.classList.add('message');

                // Das Div für den Namen einer Nachricht erzeugen
                // und unten an das chatWindow div anhängen:
                const name = document.createElement('div');
                name.classList.add('name');
                if (message.name.trim().length > 0) {
                    name.innerText = message.name + ': ';
                } else {
                    name.innerText = '<unbekannt>: ';
                }
                div.appendChild(name);

                // Das Div für den Text der Nachricht mit jQuery erzeugen
                // und unten an das chatWindow div anhängen:
                const textDiv = $('<div class="text"></div>');
                textDiv.text(message.text);
                $div.append(textDiv);

                const text = document.createElement('div');
                text.classList.add('text');

                // message.text 
                text.innerText = message.text;
                div.appendChild(text);

                // Time
                const time = document.createElement('time');
                time.attributes.datetime = message.timestamp;
                time.innerText = message.timestamp;
                div.appendChild(time);

                chatWindow.appendChild(div);
            }
        })
        .catch(console.error);

    // GET http://172.20.12.50:3000/api/messages

}

// function onSendButtonClick() {
//     // Do not send a message if the user has not yet set a name
//     if (userName === '') {
//         return;
//     }

//     const textInput = document.querySelector('#textInput');
//     const text = textInput.value;

//     // Do not send an empty message or a message containing only whitespace
//     if (text.trim() === '') {
//         return;
//     }

//     console.log('This should send', {
//         name: userName,
//         text: text
//     });

//     // POST http://172.20.12.50:3000/api/messages
// }

//Hallo <script>alert('gotcha');</script> Welt



// GET http://172.20.12.50:3000/api/messages
// POST http://172.20.12.50:3000/api/messages

// Event Handlers
let userName = '';

function onUserNameChange(event) {
    // const userNameInput = event.target;
    // const userNameInput = document.querySelector('#userNameInput');
    // userNameInput.value;
    // $('#userNameInput').val();

    userName = event.target.value;
    localStorage.setItem('userName', userName);
    console.log('User name changed to', userName);
}

function onSendButtonClick(event) {
    console.log('onSendButtonClick');
    console.log('Der User heißt ', userName);

    // jQuery
    let text = document.querySelector('#textInput').value;

    let message = {
        name: userName,
        text: text
    };

    fetch('http://172.20.12.50:3000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(function(res) {
            console.log(res)
        });

}

function load() {
    // Set up event handlers
    const userNameInput = document.querySelector('#userNameInput');
    userNameInput.addEventListener('change', onUserNameChange);

    const refreshButton = document.querySelector('#refreshButton');
    refreshButton.addEventListener('click', onRefreshButtonClick);

    const sendButton = document.querySelector('#sendButton');
    sendButton.addEventListener('click', onSendButtonClick);

    window.setInterval(onRefreshButtonClick, 2000);

    let storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        userName = storedUserName;
        userNameInput.value = storedUserName;
    }

    // Text muss escapet werden, sonst ermöglichen wir Cross Site Scripting (XSS)
    let messageDiv = $('<div class="message"></div>');
    let nameDiv = $('<span class="name"></span>');
    nameDiv.text(message.name);
    messageDiv.append(nameDiv);

}

window.onload = load;