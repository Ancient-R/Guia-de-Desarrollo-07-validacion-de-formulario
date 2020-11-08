const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

form.addEventListener('submit', ( e ) => {
    // Evitamos la propagación del evento submit
    e.preventDefault();
    
    //  .trim() elimina los espacios en blanco
    if( name.value.trim() === ''){
        alert('Nombre invalido');
        return;
    }
    if( email.value.trim() === ''){
        alert('Correo invalido');
        return;
    }

    // .length mide la cantidad de caracteres de una cadena de texto
    if( password.value.trim() === '' || password.value.trim().length < 6 ){
        alert('Contraseña invalida');
        return;
    }

    // !== que sea diferente de
    if( confirm.value.trim().length < 6 || confirm.value.trim() !== password.value ){
        alert('Las contraseñas deben ser iguales');
        return;
    }

    //  Si todas las condiciones son falsas, entoces ejecuta lo siguiente

    alert('Usuario creado correctamente');

    //  Limpia todos los campos del formulario
    form.reset();
});