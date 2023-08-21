const menu = document.querySelector(".nav__menu")
const menuList = document.querySelector(".nav__list")
const links = document.querySelectorAll(".nav__link")


menu.addEventListener("click", function(evento) {
    menuList.classList.toggle("nav__list--show")
})

links.map(link => {
    menuList.classList.toggle("nav__list--show")
})