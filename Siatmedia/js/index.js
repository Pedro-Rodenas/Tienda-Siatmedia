// JavaScript para mostrar una confirmación al enviar el formulario
document.querySelector('form').addEventListener('submit', function(e) {
    // Detiene el envío del formulario por defecto
    e.preventDefault();

    // Muestra una ventana de confirmación al usuario
    var confirmacion = confirm('¿Estás seguro de enviar el formulario?');

    // Si el usuario confirma, envía el formulario
    if (confirmacion) {
        this.submit(); // Envía el formulario
    } else {
        // Si el usuario cancela, no hace nada
        console.log('El envío del formulario ha sido cancelado.');
    }
});
