




const hamMenu = document.querySelector('.ham-menu'); 
const offScreenMenu = document.querySelector('.off-screen-menu'); 
const video = document.querySelector('.hero-video video');
const heroButton = document.querySelector('.hero-button');

// oculkto el boton de primeras 
heroButton.style.opacity = '0';

// función para que salga el boton cuando queda tanto tiempo

video.addEventListener('timeupdate', () => {
    const timeLeft = video.duration - video.currentTime;
    if (timeLeft <= 7 && timeLeft > 0) {
        heroButton.style.opacity = '1';
        heroButton.style.transition = 'opacity 0.5s ease';
    }
});


// funcion para el burguermenuu
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});