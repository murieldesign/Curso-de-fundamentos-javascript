let numeros = [2, 4, 6, 8, 10];

// .map(): Aplica una función a cada elemento y devuelve un nuevo array
let doble = numeros.map(n => n * 2);
console.log(doble); // [4, 8, 12, 16, 20]

// .filter(): Devuelve los elementos que cumplan una condición
let mayores = numeros.filter(n => n > 5);
console.log(mayores); // [6, 8, 10]

// .reduce(): Acumula los valores del array en un solo valor
let suma = numeros.reduce((acum, n) => acum + n, 0);
console.log(suma); // 30
