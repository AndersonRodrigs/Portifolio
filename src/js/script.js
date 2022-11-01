window.addEventListener("scroll", bacToTop)

function bacToTop() {
  scrollY > 650? $(".button-back-to-top").removeClass('hide') : $(".button-back-to-top").addClass('hide')
}

ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .information,
#about,
#skils,
#projects,
.cards .card,
#contact,
#contact img`)

const btnMobile = document.getElementById("btn-mobile")
const nav = document.getElementById("nav")

function toggleMenu(e) {
  if (e.type == "touchstart") e.preventDefault()
  nav.classList.toggle("active")
}

function closeMenu() {
    nav.classList.remove("active")
}

btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu)
