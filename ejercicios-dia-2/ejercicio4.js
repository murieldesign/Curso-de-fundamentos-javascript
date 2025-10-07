
let edad = Number(prompt("Ingresa tu edad:"));
let tieneLicencia = confirm("¿Tienes licencia de conducir? (Aceptar = Sí, Cancelar = No)");

if (edad >= 18 && tieneLicencia) {
    alert("Puedes conducir.");
} else {
    alert("No puedes conducir.");
}

