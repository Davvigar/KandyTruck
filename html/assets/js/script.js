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

// animacion logo
const leftRow = document.querySelector('.scrolling-row.left .image-row');
const rightRow = document.querySelector('.scrolling-row.right .image-row');

// Duplico los logos para que no haya esopacios
const leftImages = leftRow.querySelectorAll('img');
const rightImages = rightRow.querySelectorAll('img');

leftImages.forEach(img => {
    const clone = img.cloneNode(true);
    clone.classList.add('logo-image'); // para que fucncione el hover del color
    leftRow.appendChild(clone);
});

rightImages.forEach(img => {
    const clone = img.cloneNode(true);
    clone.classList.add('logo-image'); 
    rightRow.appendChild(clone);
});

// Aplicar estilos a las imágenes originales también
leftImages.forEach(img => img.classList.add('logo-image'));
rightImages.forEach(img => img.classList.add('logo-image'));

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const scrollSpeed = 0.1;
    
    leftRow.style.transform = `translateX(${scrollPosition * scrollSpeed}px)`;
    rightRow.style.transform = `translateX(${-scrollPosition * scrollSpeed}px)`;
});