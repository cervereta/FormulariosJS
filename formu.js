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

// Toggle para mostrar/ocultar contraseña
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const toggleImg = this;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleImg.src = 'ojocerrado.png';
        toggleImg.alt = 'Ocultar contraseña';
    } else {
        passwordInput.type = 'password';
        toggleImg.src = 'ojoabiertto.png';
        toggleImg.alt = 'Mostrar contraseña';
    }
});

function validarPassword() {
    const passwordInput = document.getElementById('password');
    const errorPassword = document.getElementById('error-password');
    const strengthBar = document.getElementById('password-strength');
    const valor = passwordInput.value.trim();

    // Requisitos
    const longitudMinima = valor.length > 10;
    const tieneMayuscula = /[A-Z]/.test(valor);
    const tieneMinuscula = /[a-z]/.test(valor);
    const tieneNumero = /[0-9]/.test(valor);
    const tieneEspecial = /[._*&$#]/.test(valor);

    // Contar requisitos cumplidos
    const requisitosCumplidos = [
        longitudMinima,
        tieneMayuscula,
        tieneMinuscula,
        tieneNumero,
        tieneEspecial
    ].filter(Boolean).length;

    // Validación de error
    if (valor === '') {
        passwordInput.classList.add('input-error');
        errorPassword.textContent = 'Es obligatorio introducir una contraseña';
        strengthBar.className = 'strength-bar'; // Resetear barra
    } else if (!longitudMinima || !tieneMayuscula || !tieneMinuscula || !tieneNumero || !tieneEspecial) {
        passwordInput.classList.add('input-error');
        let errores = [];
        if (!longitudMinima) errores.push('más de 10 caracteres');
        if (!tieneMayuscula) errores.push('una mayúscula');
        if (!tieneMinuscula) errores.push('una minúscula');
        if (!tieneNumero) errores.push('un número');
        if (!tieneEspecial) errores.push('un carácter especial (._*&$#)');
        errorPassword.textContent = 'La contraseña debe incluir: ' + errores.join(', ');
    } else {
        passwordInput.classList.remove('input-error');
        errorPassword.textContent = '';
    }

    // Actualizar barra de fuerza
    strengthBar.className = 'strength-bar'; // Resetear clases
    if (valor !== '') {
        if (requisitosCumplidos <= 2) {
            strengthBar.classList.add('strength-weak');
        } else if (requisitosCumplidos <= 4) {
            strengthBar.classList.add('strength-medium');
        } else {
            strengthBar.classList.add('strength-strong');
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

function validarEdad() {
    const edadInput = document.getElementById('edad');
    const errorEdad = document.getElementById('error-edad');
    const valor = edadInput.value.trim();

    if (valor === '') {
        edadInput.classList.add('input-error');
        errorEdad.textContent = 'Es obligatorio introducir la edad';
    } else {
        const edadNum = parseInt(valor);
        if (edadNum < 18) {
            edadInput.classList.add('input-error');
            errorEdad.textContent = 'La edad debe ser mayor o igual a 18';
        } else if (edadNum > 90) {
            edadInput.classList.add('input-error');
            errorEdad.textContent = 'La edad debe ser menor o igual a 90';
        } else {
            edadInput.classList.remove('input-error');
            errorEdad.textContent = '';
        }
    }
}

function validarTelefono() {
    const telefonoInput = document.getElementById('telefono');
    const errorTelefono = document.getElementById('error-telefono');
    const valor = telefonoInput.value.trim();
    const soloNumeros = /^[0-9]+$/; // Expresión regular para solo números

    if (valor === '') {
        telefonoInput.classList.add('input-error');
        errorTelefono.textContent = 'Es obligatorio introducir un teléfono';
    } else if (!soloNumeros.test(valor)) {
        telefonoInput.classList.add('input-error');
        errorTelefono.textContent = 'El teléfono solo puede contener números';
    } else if (valor.length !== 9) {
        telefonoInput.classList.add('input-error');
        errorTelefono.textContent = 'El teléfono debe tener exactamente 9 números';
    } else {
        telefonoInput.classList.remove('input-error');
        errorTelefono.textContent = '';
    }
}

function validarEmail() {
    const emailInput = document.getElementById('email');
    const errorEmail = document.getElementById('error-email');
    const valor = emailInput.value.trim();
    // Expresión regular para validar email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (valor === '') {
        emailInput.classList.add('input-error');
        errorEmail.textContent = 'Es obligatorio introducir un email';
    } else if (!emailRegex.test(valor)) {
        emailInput.classList.add('input-error');
        errorEmail.textContent = 'Introduce un email válido (ej: usuario@dominio.com)';
    } else {
        emailInput.classList.remove('input-error');
        errorEmail.textContent = '';
    }
}