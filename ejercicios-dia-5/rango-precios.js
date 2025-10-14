
let productos = [
  { nombre: "Camiseta", precio: 15 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Sombrero", precio: 10 },
  { nombre: "Chaqueta", precio: 60 }
];

function productosEnRango(min, max){
    return productos.filter(producto => producto.precio >= min && producto.precio <=max);
}

let resultado= productosEnRango(10,40);
console.log("productos entre 10 € y 40 €:", resultado);