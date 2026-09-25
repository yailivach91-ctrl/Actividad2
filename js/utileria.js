// Valida que el correo tenga un formato válido.
const validarCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
};

// Valida que el texto contenga únicamente letras, acentos, ñ y espacios.
const soloLetras = (texto) => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
};

// Valida que el número tenga exactamente la cantidad de dígitos indicada.
const validarLongitud = (numero, maxLongitud) => {
    return String(numero).length === maxLongitud;
};

// Calcula la edad a partir de la fecha de nacimiento.
const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
};

// Verifica si una persona tiene 18 años o más.
const esMayorDeEdad = (fechaNacimiento) => {
    return calcularEdad(fechaNacimiento) >= 18;
};

// Valida que la contraseña tenga mayúscula, minúscula,
// número, carácter especial y mínimo 8 caracteres.
const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
};

// Función adicional 1: convierte una cantidad a moneda mexicana.
const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
    }).format(cantidad);
};

// Función adicional 2: elimina espacios innecesarios de un texto.
const limpiarEspacios = (texto) => {
    return texto.trim().replace(/\s+/g, " ");
};