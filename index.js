const hambergurMenu = document.querySelector(".hamburger-menu")
const xMenu = document.querySelector(".x-menu")
const listContainer2 = document.querySelector(".lists-container-2")
const lists2 = document.querySelector(".lists-2")


hambergurMenu.addEventListener("click", () => {
        xMenu.classList.add("x-menu-active")
        hambergurMenu.classList.add("hamburger-menu-active")
        listContainer2.classList.add("lists-container-2-active")
        lists2.classList.add("lists-2-active")
})
xMenu.addEventListener("click", () => {
     xMenu.classList.remove("x-menu-active")
     hambergurMenu.classList.remove("hamburger-menu-active")
     listContainer2.classList.remove("lists-container-2-active")
     lists2.classList.remove("lists-2-active")
})