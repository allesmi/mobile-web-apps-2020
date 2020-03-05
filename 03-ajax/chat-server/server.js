const express = require('express');
const cors = require('cors');
const networkInterfaces = require('os').networkInterfaces;

const app = express();
const port = 3000;

// Set up express middleware
app.use(express.json());
// app.use(express.static('static'));

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "script-src 'self'");
    return next();
});

// Data structures
let messages = [];

// API

app.get('/', cors(), (req, res) => {
    res.send({ status: 'ok', message: 'Hello Client!' });
});

app.get('/without-cors', (req, res) => {
    res.send({ status: 'ok', message: 'CORS is disabled for this endpoint' });
});

app.options('/api/messages', cors()); // For preflight requests

app.post('/api/messages', cors(), (req, res) => {
    const timestamp = (new Date()).toISOString();
    const body = req.body;

    res.type('application/json');

    // Check headers
    if (req.header('content-type') != 'application/json') {
        res.status(400)
            .send({ error: 'Please set the "content-type" header to "application/json".' });
        return;
    }

    // Check required fields
    if (!('name' in body)) {
        const error = { status: 'error', error: 'Body is missing the "name" property.' };
        res.status(400)
            .send(error);
        console.log(timestamp, 'Error:', error);
        return;
    }

    if (!('text' in body)) {
        const error = { status: 'error', error: 'Body is missing the "text" property.' };
        res.status(400)
            .send(error);
        console.log(timestamp, 'Error:', error);
        return;
    }


    const name = body.name;
    const text = body.text;

    const message = {
        timestamp,
        name,
        text
    };

    messages.push(message);

    // Truncate the messages list
    if (messages.length > 100) {
        messages = messages.slice(0, 100);
        console.log(timestamp, 'POST Success: resize');
    }
    else {
        console.log(timestamp, 'POST Success');
    }

    res.status(200).send({ status: 'ok' });
});

app.get('/api/messages', cors(), (req, res) => {
    const timestamp = (new Date()).toISOString();
    console.log(timestamp, 'GET');
    res.type('application/json');
    res.send(messages);
});

// end of API

const interfaces = networkInterfaces();
const addresses = [];

for (let interface in interfaces) {
    let assignedAddresses = interfaces[interface];
    for (let assignedAddress of assignedAddresses) {
        if (assignedAddress.family === 'IPv4') {
            addresses.push(assignedAddress.address);
        }
    }
}

app.listen(port, () => {
    console.log('Server listening at');
    for (let address of addresses) {
        console.log(`  http://${address}:${port}`);
    }
    console.log();
    console.log('GET\t/\t\tMake the service say hello');
    console.log('GET\t/api/messages\tGet a list of messages');
    console.log('POST\t/api/messages\tSend a message to the server');
    console.log();
});
