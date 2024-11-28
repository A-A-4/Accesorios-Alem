// script.js

// Selecciona el botón del dropdown
const dropdown = document.querySelector('.dropdown');

// Agrega un evento de clic al botón para alternar la visibilidad del menú
dropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el evento afecte otros elementos
    dropdown.classList.toggle('active'); // Alterna la clase 'active' que muestra el menú
});

// Cierra el menú si se hace clic fuera del dropdown
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active'); // Cierra el menú si se hace clic fuera de él
    }
});
