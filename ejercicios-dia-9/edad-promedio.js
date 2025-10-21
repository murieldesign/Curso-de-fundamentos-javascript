// Crear un array de edades y calcular el promedio
let edades = [20, 25, 30, 35, 40];

let suma = edades.reduce((acum, edad) => acum + edad, 0);
let promedio = suma / edades.length;

console.log("Edades:", edades);
console.log("Edad promedio:", promedio);

// Salida esperada:
// Edad promedio: 30
