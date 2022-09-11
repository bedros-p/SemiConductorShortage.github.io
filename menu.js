let clicked = false

let menu = document.querySelector('hamburger-menu')
let displayMenu = document.querySelector('content-menu')
let contain = document.querySelector('contain')

contain.addEventListener('click', ()=>{
        menu.classList.toggle("clicked")
        displayMenu.classList.toggle("active")
})