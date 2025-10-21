// Crear un array de productos y filtrar los que cuestan más de 50
let productos = [
  { nombre: "Teclado", precio: 45 },
  { nombre: "Ratón", precio: 25 },
  { nombre: "Monitor", precio: 120 },
  { nombre: "USB", precio: 15 },
  { nombre: "Silla", precio: 90 }
];

let caros = productos.filter(p => p.precio > 50);

console.log("Productos caros:", caros);

// Salida esperada:
// Productos caros: [{ nombre: "Monitor", precio: 120 }, { nombre: "Silla", precio: 90 }]

