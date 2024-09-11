const button = document.querySelector('button')

button.addEventListener('click', () => {
    const input = document.querySelector('input')
    const ul = document.querySelector('ul')
    ul.insertAdjacentHTML('beforeend',`<li class="list-group-item">${input.value}</li>`)
    input.value = ''
})