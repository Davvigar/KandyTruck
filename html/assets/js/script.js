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

// Función para cambiar el color de fondo de la sección
function setupValuesSectionHover() {
    // Seleccionar todas las secciones y elementos que necesitamos
    const allSections = document.querySelectorAll('section');
    const teamGrid = document.querySelector('.team-grid');
    const valuesPhoto = document.querySelector('.values-photo');
    const inclusion = document.querySelector('.inclusion');
    const creativity = document.querySelector('.creativity');
    const quality = document.querySelector('.quality');

    const colors = {
        inclusion: '#FFB6D5',
        creativity: '#FF73F8',
        quality: '#C69CFF',
        default: '#FFE5E5'
    };

    const elements = [...allSections, teamGrid, valuesPhoto];

    const changeBackgroundColor = (color) => {
        // Pre-configure all transitions
        elements.forEach(element => {
            if (element) {
                element.style.transition = 'background-color 0.2s ease';
            }
        });

        // Use requestAnimationFrame for smooth synchronous color change
        requestAnimationFrame(() => {
            elements.forEach(element => {
                if (element) {
                    element.style.backgroundColor = color;
                }
            });
        });
    };

    // Event listeners
    const handleMouseEnter = (color) => () => changeBackgroundColor(color);
    const handleMouseLeave = () => changeBackgroundColor(colors.default);

    inclusion.addEventListener('mouseenter', handleMouseEnter(colors.inclusion));
    creativity.addEventListener('mouseenter', handleMouseEnter(colors.creativity));
    quality.addEventListener('mouseenter', handleMouseEnter(colors.quality));

    [inclusion, creativity, quality].forEach(element => {
        element.addEventListener('mouseleave', handleMouseLeave);
    });
}

// Asegurarnos de que el DOM está cargado
document.addEventListener('DOMContentLoaded', setupValuesSectionHover);