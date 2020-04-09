function log(message) {
    console.log(message);
}

const interactionElement = document.querySelector('#interaction');

let eventList = ['mouseover', 'mousedown', 'mouseup', 'click'];

for (let event of eventList) {
    interactionElement.addEventListener(event, function() {
        log(event)
    });
}

document.addEventListener('touchstart', function(touchEvent) {
    let touchCount = 0;
    for (let touch of touchEvent.touches) {
        if (touch.target === interactionElement) {
            touchCount++;
        }
    }
    console.log(touchEvent);
    console.log('There are', touchCount, 'active touches');
});

// Gesten mit Hammer.js erkennen

// https://hammerjs.github.io/
let hammer = new Hammer(touchDiv, {});

// https://hammerjs.github.io/getting-started/
hammer.on('swipe', function(event) {
    console.log('Swiped!');
});