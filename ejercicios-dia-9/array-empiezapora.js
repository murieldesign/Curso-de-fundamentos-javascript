// Recorrer un array y mostrar las palabras que empiezan con A
let palabras = ["Árbol", "Casa", "Avión", "Perro", "Abeja"];

let conA = palabras.filter(p => p[0].toUpperCase() === "A");

console.log("Palabras que empiezan por A:", conA);

// Salida esperada:
// ["Árbol", "Avión", "Abeja"]
