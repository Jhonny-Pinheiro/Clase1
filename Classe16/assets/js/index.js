const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=21c66d03&s=batman'
const card = document.querySelector('.card')

fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data.Search[0].Poster)
        data.Search.forEach((banner) => {
        console.log(banner)
        card.insertAdjacentHTML('beforeend',`<img src="${banner.Poster}">`)
        }
    )})


//un gatito
/* const url = 'https://api.thecatapi.com/v1/images/search'
const img = document.querySelector('img')

fetch(url)
.then(response => response.json())
.then((data) => {
    console.log(data[0].url)
    img.src = data[0].url
}) */

//todos gatitos
/* const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
const card = document.querySelector('.card')

const img = document.querySelector('img')

fetch(url)
.then(response => response.json())
.then((data) => {
    console.log(data[0].url)
    data.forEach((gato) => {
        console.log(gato)
        card.insertAdjacentHTML('beforeend',`<img src="${gato.url}">`)
    }
)}) */