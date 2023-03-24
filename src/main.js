const email = "a.bakirov@innopolis.university"
const url = 'https://fwd.innopolis.app/api/hw2';
const params = new URLSearchParams();
params.append('email', email);
const apiUrl = `${url}?${params.toString()}`;

const button = document.getElementById("comicImage");
const display = document.getElementById("comicDisplay");

button.addEventListener('click', function() {
    while (comicDisplay.firstChild) {
        comicDisplay.removeChild(comicDisplay.firstChild);
    }
    fetch(apiUrl)
        .then(response => response.text())
        .then(number => {
            const params = new URLSearchParams({ num: number });
            const url = `https://getxkcd.vercel.app/api/comic?${params.toString()}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const image = data.img;
                    const title = data.title;
                    const alt = data.alt;
                    const year = data.year;
                    const month = data.month;
                    const day = data.day;
                    const imgElement = document.createElement('img');
                    imgElement.src = image;
                    imgElement.alt = alt;
                    comicDisplay.appendChild(imgElement);
                    const titleElement = document.createElement('h2');
                    titleElement.textContent = title;
                    comicDisplay.appendChild(titleElement);
                    const dateElement = document.createElement('p');
                    const date = new Date(year, month - 1, day);
                    dateElement.textContent = `Uploaded on ${date.toLocaleDateString()}`;
                    comicDisplay.appendChild(dateElement);
                })
                .catch(error => {
                    console.error('Error:', error);
                    const errorElement = document.createElement('p');
                    errorElement.textContent = 'An error occured while retrieving the comic.';
                    comicDisplay.appendChild(errorElement);
                });
        })
        .catch(error => {
            console.error('Error:', error);
            const errorElement = document.createElement('p');
            errorElement.textContent = 'An error occured while retrieving the number.';
            comicDisplay.appendChild(errorElement);
        });
});

