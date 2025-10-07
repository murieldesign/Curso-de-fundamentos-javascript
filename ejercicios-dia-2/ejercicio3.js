
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
    alert(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
    alert(num1 + " es menor que " + num2);
} else {
    alert("Ambos números son iguales.");
}
