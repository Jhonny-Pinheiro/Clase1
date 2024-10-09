//const url = 'https://api.thecatapi.com/v1/images/search'

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'

/*const gatito = document.querySelector('#gatito')*/

const frase = document.querySelector('#frase')
const imagem = document.querySelector('#imagem')
const personage = document.querySelector('#personage')

/* fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data[0].url)
        gatito.insertAdjacentHTML('beforeend', `<img src=${data[0].url}>`)
    }) */

    fetch(url)
    .then(response => response.json())
    .then((data) => {
        //console.log(data[0].character)
        //console.log(data[0].image)
        //console.log(data[0].quote)
        frase.innerText= data[0].quote
        imagem.src = data[0].image
        personage.innerText= data[0].characer
    })
