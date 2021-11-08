// Logo image hover substitution
function hoverLogo(element) {
  element.setAttribute('src', 'assets/img/logo/render3.png')
}

function unhoverLogo(element) {
  element.setAttribute('src', 'assets/img/logo/render3.png')
}

// Hamburger menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

// Scroll Up icon
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 250) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
