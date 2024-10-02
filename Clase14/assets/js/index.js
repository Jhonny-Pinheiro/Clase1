const boton = document.querySelector('button')
const tbody = document.querySelector('tbody')

boton.addEventListener('click', ()=> {
    const producto = document.querySelector('input').value
    const cantidad = parseFloat(document.querySelector('#cantidad').value)
    const precio = parseFloat(document.querySelector('#precio').value)
    const total = cantidad * precio
    tbody.insertAdjacentHTML('beforeend',
        `<tr>
            <td>${producto}</td>
            <td>${cantidad}</td>
            <td>${precio}</td>
            <td>${total}</td>
        </tr>`)
})