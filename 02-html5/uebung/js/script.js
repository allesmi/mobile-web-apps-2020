function onContainerClick(event) {

}

function main() {
    let container = document.querySelector('.container');

    for (let y = 0; y < 10; y++) {
        let top = 50 * y;
        for (let x = 0; x < 10; x++) {
            let div = document.createElement('div');

            let left = 50 * x;

            div.style.top = top + 'px';
            div.style.left = left + 'px';

            container.appendChild(div);
        }
    }

    container.addEventListener('click', onContainerClick);
}

window.onload = main;