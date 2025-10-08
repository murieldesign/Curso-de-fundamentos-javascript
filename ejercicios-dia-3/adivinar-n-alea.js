let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

do {
    intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));
    if (intento !== numeroSecreto) {
        console.log("Intenta de nuevo.");
    }
} while (intento !== numeroSecreto);

console.log("¡Felicidades! Has adivinado el número.");
