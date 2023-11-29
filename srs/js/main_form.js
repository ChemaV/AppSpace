function validarFormulario(e) {
    e.preventDefault()
    

    document.getElementById('error-message').innerHTML = '';
    document.getElementById('error-message2').innerHTML = '';
    document.getElementById('error-message3').innerHTML = '';


    // Obtener referencias a los campos de entrada
    let nombre = document.getElementById('nombres').value;
    let apellido = document.getElementById('apellidos').value;
    let email = document.getElementById('correo').value;

    // Validar campos obligatorios
    if (nombre === '') {
       document.getElementById('error-message').innerHTML = 'Por favor, ingresa tu nombre';
       return false; 
    }

    if (apellido === '') {
        document.getElementById('error-message2').innerHTML = 'Por favor, ingresa tu apellido';
        return false; 
     }

     if (email === '') {
        document.getElementById("error-message3"). innerHTML = 'Por favor, ingresa un dato';
        return false;
    }


    if (!validarEmail(email)) {
        document.getElementById("error-message3"). innerHTML = 'Por favor, ingresa una dirección de correo electrónico válida: example@mail.com';
        return false;
    }

    function validarEmail(email) {
        // Utilizando una expresión regular para verificar la presencia de '@'
        // Puedes personalizar esta expresión regular según tus necesidades
        let regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    return true;
}

// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Obtén una referencia al botón
    var boton = document.getElementById('miBoton');

    // Agrega un event listener al botón
    boton.addEventListener('click', function(e) {
        // Llama a la función de validación cuando se hace clic en el botón
        if (validarFormulario(e)) {
            // Aquí puedes enviar el formulario o realizar otras acciones
            alert('Formulario enviado.');
        }
    });
});








