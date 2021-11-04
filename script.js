const btnShow = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

btnShow.addEventListener('click', ()=> {
    btnShow.classList.toggle('is-active');
    navLinks.classList.toggle('is-inactive');
});



