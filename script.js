// Puedes agregar código JavaScript aquí para funcionalidades adicionales

document.addEventListener('DOMContentLoaded', function () {
    // Agregar aquí código que se ejecutará después de que el DOM esté completamente cargado
    console.log('El DOM ha sido cargado');

    // Ejemplo de agregar interactividad al botón de contacto
    const contactoButton = document.querySelector('.cta-button');

    contactoButton.addEventListener('click', function () {
        alert('¡Gracias por tu interés! Te contactaré pronto.');
    });
});