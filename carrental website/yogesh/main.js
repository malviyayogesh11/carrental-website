let menu = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 300, origin: 'top'})
sr.reveal('.form-container form',{delay: 300, origin: 'left'})

sr.reveal('.heading',{delay: 800, origin: 'top'})

sr.reveal('.ridecointer .box',{delay: 300, origin: 'top'})

sr.reveal('.services-container .box',{delay: 300, origin: 'top'})

sr.reveal('.about-cointainer .box',{delay: 300, origin: 'top'})

sr.reveal('.reviews-cotainer .box',{delay: 300, origin: 'top'})

sr.reveal('.newsletter .box',{delay: 200, origin: 'bottom'})




