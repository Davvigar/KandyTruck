const hamMenu = document.querySelector('.ham-menu'); // Selector corregido
const offScreenMenu = document.querySelector('.off-screen-menu'); // Selector corregido

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});