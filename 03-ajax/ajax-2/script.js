let h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText = 'Hundeliste';

let button = document.createElement('button');
button.type = 'button';
button.innerText = 'Bild anzeigen';
document.body.appendChild(button);

button.onclick = function () {
    setImage('https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg');
};

let main = document.createElement('main');
document.body.appendChild(main);

let output = document.createElement('output');
main.appendChild(output);

let img = document.createElement('img');
output.appendChild(img);



let footer = document.createElement('footer');
footer.innerHTML = 'Daten von <a href="https://dog.ceo/dog-api">Dog API</a>';
document.body.appendChild(footer);

fetch('https://dog.ceo/api/breeds/list/all')
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Error');
        }

        return response.json();
    })
    .then(function (data) {
        let ul = document.createElement('ul');
        main.appendChild(ul);

        let dogs = data.message;
        let status = data.status;

        if (status !== 'success') {
            throw new Error('Die API sagt Fehler');
        }

        for (let breedname in dogs) {
            let subbreeds = dogs[breedname];

            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerText = breedname;

            let a = document.createElement('a');
            a.innerText = 'Bild';
            a.href = '#';
            li.appendChild(a);

            a.onclick = function () {
                fetch('https://dog.ceo/api/breed/' + breedname + '/images')
                    .then(function (response) {
                        if (!response.ok) {
                            throw new Error('Error');
                        }

                        return response.json();
                    })
                    .then(function (data) {
                        let status = data.status;
                        if (status !== 'success') {
                            throw new Error('API Error');
                        }

                        let images = data.message;
                        let image = images[0];
                        Math.random(); // Dezimalzahl zwischen 0 und 1
                        // Ganze Zahl zwischen 0 und images.length

                        let randomIndex = Math.floor(Math.random() * images.length);
                        image = images[randomIndex];
                        setImage(image);
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            };

            if (subbreeds.length > 0) {
                let ul2 = document.createElement('ul');
                li.appendChild(ul2);
                for (let i = 0; i < subbreeds.length; i++) {
                    let subbreedname = subbreeds[i];
                    let li2 = document.createElement('li');
                    li2.innerText = subbreedname;
                    ul2.appendChild(li2);

                    let a = document.createElement('a');
                    a.href = '#';
                    a.innerText = 'Bild';
                    li2.appendChild(a);

                    a.onclick = function() {
                        'https://dog.ceo/api/breed/' + breedname + '/' + subbreedname + '/images'
                        `https://dog.ceo/api/breed/${breedname}/${subbreedname}/images`
                    };
                }
            }
        }
    })
    .catch(function (error) {
        console.error(error);
    });

function setImage(url) {
    img.src = url;
}