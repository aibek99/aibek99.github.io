const email = 'a.bakirov@innopolis.university';
const apiUrl = `https://fwd.innopolis.app/api/hw2?email=${email}`;

let btn = document.getElementById('btnClick')
let image = document.getElementById('image')

btn.addEventListener('click', function() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const id = data.comic;
        const xkcdApiUrl = `https://getxkcd.vercel.app/api/comic?num=${id}`;
        return fetch(xkcdApiUrl);
    })
    .then(response => response.json())
    .then(data => {
        const img = document.createElement('img');
        img.src = data.img;
        img.alt = data.alt;
        const title = document.createElement('h2');
        title.textContent = data.title;
        const comicDate = document.createElement('p');
        const date = new Date(data.year, data.month - 1, data.day);
        comicDate.textContent = `Uploaded on ${date.toLocaleDateString()}`;
        const container = document.querySelector('#comic-container');
        container.appendChild(img);
        container.appendChild(title);
        container.appendChild(comicDate);
        image.src = data.message
    })
    .catch(error => console.error(error));
})