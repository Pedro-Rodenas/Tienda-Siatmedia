document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar una confirmación al enviar el formulario
    document.querySelector('form').addEventListener('submit', function(e) {
        const confirmacion = confirm('¿Estás seguro de iniciar sesión?');
        
        if (!confirmacion) {
            e.preventDefault(); // Evita el envío del formulario si el usuario no está seguro
            console.log('Inicio de sesión cancelado.');
        }
    });
});
