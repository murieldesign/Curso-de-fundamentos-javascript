// Creamos un array con varios números
let numeros =[5,10,15,20];

// Inicializamos una variable 'suma' en 0 para acumular el total

let suma=0;

// Bucle 'for' que recorre todos los elementos del array
// i comienza en 0 y aumenta hasta que sea menor que la longitud del array

for(let i = 0; i < numeros.length; i++ ){

    // En cada iteración sumamos el valor actual del array a la variable 'suma'
    // numeros[i] representa el elemento actual (5, luego 10, luego 15, etc.)

    suma += numeros [i];
}

// Mostramos el resultado final en consola
console.log(suma);
