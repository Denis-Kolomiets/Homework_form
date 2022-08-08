function showPassword() {
    const btn = document.querySelector('.btn__pass')
    const input = document.querySelector('.pass__input')

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')

        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text')
        }  else{
            input.setAttribute('type', 'password')
        }
    })
}

showPassword()


function tick() {
    let col = document.querySelector('.rem__chec')

    col.addEventListener('click', () => {
        col.classList.toggle('active__tick')
    })
    
}
tick()