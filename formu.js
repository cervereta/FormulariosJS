function miNombre() {
    const nombreInput = document.getElementById('nombre');
    const errorNombre = document.getElementById('error-nombre');
    const valor = nombreInput.value.trim();

    if (valor === '') {
        nombreInput.classList.add('input-error');
        errorNombre.textContent = 'Es obligatorio poner un nombre';
    } else if (valor.length > 20) {
        nombreInput.classList.add('input-error');
        errorNombre.textContent = 'El nombre no puede superar los 20 caracteres';
    } else {
        nombreInput.classList.remove('input-error');
        errorNombre.textContent = '';
    }
}

function miApellido() {
    const apellidosInput = document.getElementById('apellidos');
    const errorApellidos = document.getElementById('error-apellidos');
    const valor = apellidosInput.value.trim();

    if (valor === '') {
        apellidosInput.classList.add('input-error');
        errorApellidos.textContent = 'Es obligatorio poner apellidos';
    } else if (valor.length > 30) {
        apellidosInput.classList.add('input-error');
        errorApellidos.textContent = 'Los apellidos no pueden superar los 30 caracteres';
    } else {
        apellidosInput.classList.remove('input-error');
        errorApellidos.textContent = '';
    }
}

function miUsuario() {
    const usuarioInput = document.getElementById('usuario');
    const errorUsuario = document.getElementById('error-usuario');
    const valor = usuarioInput.value.trim();

    if (valor === '') {
        usuarioInput.classList.add('input-error');
        errorUsuario.textContent = 'Es obligatorio poner un usuario';
    } else if (valor.length > 20) {
        usuarioInput.classList.add('input-error');
        errorUsuario.textContent = 'El usuario no puede superar los 20 caracteres';
    } else {
        usuarioInput.classList.remove('input-error');
        errorUsuario.textContent = '';
    }
}

function validarPassword() {
    const passwordInput = document.getElementById('password');
    const errorPassword = document.getElementById('error-password');
    const valor = passwordInput.value.trim();

    if (valor === '') {
        passwordInput.classList.add('input-error');
        errorPassword.textContent = 'Es obligatorio introducir una contraseña';
    } else if (valor.length <= 8) {
        passwordInput.classList.add('input-error');
        errorPassword.textContent = 'La contraseña debe tener más de 8 caracteres';
    } else {
        passwordInput.classList.remove('input-error');
        errorPassword.textContent = '';
        // Validar Repetir Password si ya tiene valor
        if (document.getElementById('repetir_password').value !== '') {
            validarRepetirPassword();
        }
    }
}

function validarRepetirPassword() {
    const passwordInput = document.getElementById('password');
    const repetirPasswordInput = document.getElementById('repetir_password');
    const errorRepetirPassword = document.getElementById('error-repetir-password');
    const valorPassword = passwordInput.value.trim();
    const valorRepetir = repetirPasswordInput.value.trim();

    if (valorRepetir === '') {
        repetirPasswordInput.classList.add('input-error');
        errorRepetirPassword.textContent = 'Es obligatorio repetir la contraseña';
    } else if (valorRepetir !== valorPassword) {
        repetirPasswordInput.classList.add('input-error');
        errorRepetirPassword.textContent = 'Las contraseñas no coinciden';
    } else if (valorPassword.length <= 8) {
        repetirPasswordInput.classList.add('input-error');
        errorRepetirPassword.textContent = 'La contraseña debe tener más de 8 caracteres';
    } else {
        repetirPasswordInput.classList.remove('input-error');
        errorRepetirPassword.textContent = '';
    }
}