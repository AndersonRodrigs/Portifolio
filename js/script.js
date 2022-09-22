ScrollReveal({
  origin: 'top',
  distance: '40px',
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

function toggleMenu(e) {
  if (e.type == 'touchstart') e.preventDefault()
  const nav = document.getElementById('nav')
  $('#nav').toggleClass('active')
}

$('#btn-mobile').click(toggleMenu)
$('#btn-mobile').on('touchstart', toggleMenu)
