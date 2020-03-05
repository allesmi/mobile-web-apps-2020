# chat-server

Es ist eine Chat App als Web App zu entwickeln. 

Es gibt einen API Endpoint um Nachrichten zu senden und einen um alle Nachrichten zu empfangen.

## Installieren

In einem Terminal in diesem Ordner:

```bash
npm install
```

## Starten

In einem Terminal in diesem Ordner:

```bash
npm start
```

## Stuff to do

- GET the / end point
	- with XMLHttpRequest
	- with Fetch
	- optionally: with jQuery
- GET the /without-cors endpoint
	- What happens?
	- What is the error message in the DevTools?
	- What are the headers of the hello world requests?
- GET and POST the /api/messages endpoint
	- Make sure to send and receive JSON
	- Try different ways to make AJAX calls
	- Display the result
	- Make a small chat web app
		- The user can set its name
		- The user can type a message
		- The user can send a message
		- The user can get a list of messages with the click of a button
		- The list of messages is updated periodically
