// Mensaje en la consola
console.log('El script externo ha sido cargado');

// Interacción con el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Cambiar el texto del título después de que la página se haya cargado
    const h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.textContent = "Título cambiado por script.js";
    }
});

// Función para mostrar un mensaje de alerta
function showAlert() {
    alert('El script externo está funcionando');
}

// Llamar a la función
showAlert();
