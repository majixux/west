
const menuHamburguer = document.querySelector(".hamburguer-menu")
const navLinks = document.querySelector(".navBar")

menuHamburguer.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu')
})