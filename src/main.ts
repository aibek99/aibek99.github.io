interface ComicData {
    img: string;
    title: string;
    alt: string;
    year: number;
    month: number;
    day: number;
}

type UrlType = string;
type DocType = HTMLElement | null;

const email: string = 'a.bakirov@innopolis.university';
const url: UrlType = 'https://fwd.innopolis.app/api/hw2';
const params: URLSearchParams = new URLSearchParams();
params.append('email', email);

const apiUrl: UrlType = `${url}?${params.toString()}`;

const getComicButton: DocType = document.getElementById('comicImage');
const comicDisplay: DocType = document.getElementById('comicDisplay');

getComicButton?.addEventListener('click', () => {
    while (comicDisplay?.firstChild) {
        comicDisplay.removeChild(comicDisplay.firstChild);
    }
    fetch(apiUrl)
    .then(response => response.text())
    .then(number => {
        const params = new URLSearchParams({ num: number });
        const comicUrl = `https://getxkcd.vercel.app/api/comic?${params.toString()}`;
        fetch(comicUrl)
        .then(response => response.json())
        .then((data: ComicData) => {
            const { img, title, alt, year, month, day } = data;
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = alt;
            comicDisplay?.appendChild(imgElement);

            const titleElement = document.createElement('h2');
            titleElement.textContent = title;
            comicDisplay?.appendChild(titleElement);

            const dateElement = document.createElement('p');
            const date = new Date(year, month - 1, day);
            dateElement.textContent = `Uploaded on ${date.toLocaleDateString()}`;
            comicDisplay?.appendChild(dateElement);
        })
        .catch(error => {
            console.error('Error:', error);
            const errorElement = document.createElement('p');
            errorElement.textContent = 'An error occurred while retrieving the comic.';
            comicDisplay?.appendChild(errorElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        const errorElement = document.createElement('p');
        errorElement.textContent = 'An error occurred while retrieving the number.';
        comicDisplay?.appendChild(errorElement);
    });
});



