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






// Seleccionamos todas las imágenes con la clase 'zoomable'
const images = document.querySelectorAll('.zoomable');

images.forEach(image => {
  image.addEventListener('click', function() {
    // Añadimos la clase 'zoomed' a la imagen cuando se hace clic
    image.classList.toggle('zoomed');
    
    // Al hacer clic, añadimos un fondo oscuro (cambiamos el 'body')
    document.body.classList.toggle('dark-mode');

    if (this.classList.contains('zoomed')) {
        document.body.classList.add('productos-active'); // Activar fondo oscuro en todas las cuadriculas
    } else {
        document.body.classList.remove('productos-active'); // Desactivar fondo oscuro
    }
  });

});








