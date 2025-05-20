const hamMenu = document.querySelector('.ham-menu'); 
const offScreenMenu = document.querySelector('.off-screen-menu'); 
const video = document.querySelector('.hero-video video');
const heroButton = document.querySelector('.hero-button');

// Función para el menú hamburguesa
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Solo ejecutar el código relacionado con el video si existe en la página
if (video && heroButton) {
    // Ocultar el botón al principio
    heroButton.style.opacity = '0';

    // Función para que salga el botón
    video.addEventListener('timeupdate', () => {
        const timeLeft = video.duration - video.currentTime;
        if (timeLeft <= 7 && timeLeft > 0) {
            heroButton.style.opacity = '1';
            heroButton.style.transition = 'opacity 0.5s ease';
        }
    });
}

// Resto del código para las animaciones de logos si existen
const leftRow = document.querySelector('.scrolling-row.left .image-row');
const rightRow = document.querySelector('.scrolling-row.right .image-row');

if (leftRow && rightRow) {
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
}