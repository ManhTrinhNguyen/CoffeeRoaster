const hambergurMenu = document.querySelector(".hamburger-menu")
const xMenu = document.querySelector(".x-menu")
const listContainer2 = document.querySelector(".lists-container-2")
const lists2 = document.querySelector(".lists-2")
let imgSection3 = document.querySelector(".section3-img")
let imgSection2 = document.querySelector(".section2-img")

console.log(imgSection2.width)
console.log(imgSection3.src)
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


function swtichImg () {
    // img section 3
    if (imgSection3.width === 445) {
        imgSection3.src = "../assets/about/desktop/image-quality.jpg"
    }else if (imgSection3.width === 650) {
        imgSection3.src = "../assets/about/tablet/image-quality.jpg"
    } else {
        imgSection3.src = "../assets/about/mobile/image-quality.jpg"
    }

    //img section 2 
    if (imgSection2.width === 281 || imgSection2.width === 466) {
        imgSection2.src = "../assets/about/tablet/image-commitment.jpg"
    }else if (imgSection2.width === 445) {
        imgSection2.src = "../assets/about/desktop/image-commitment.jpg"
    }
}
setInterval(swtichImg, 100)
