const button = document.querySelector('button')

button.addEventListener('click', () => {
    const input = document.querySelector('input').value
    const p = document.querySelector('p')
    p.innerText = input + ' muy buen trabajo 👏!'
})