window.addEventListener("scroll", bacToTop)

function bacToTop() {
  scrollY > 530? $(".button-back-to-top").removeClass('hide') : $(".button-back-to-top").addClass('hide')
}


function toggleMenu(e) {
  if (e.type == "touchstart") e.preventDefault()
  $("#nav").toggleClass("active")
}

function closeMenu() {
    nav.classList.remove("active")
}

$("#btn-mobile").on("click", toggleMenu)
$("#btn-mobile").on("touchstart", toggleMenu)


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