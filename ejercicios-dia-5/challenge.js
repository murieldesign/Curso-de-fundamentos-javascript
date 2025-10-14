// 1. Array de productos
let inventario = [
  { nombre: "Camiseta", precio: 15, cantidad: 100 },
  { nombre: "Pantalón", precio: 25, cantidad: 50 },
  { nombre: "Zapatos", precio: 40, cantidad: 30 }
];

// 2. Función para agregar un producto
function agregarProducto(nombre, precio, cantidad) {
  inventario.push({ nombre, precio, cantidad });
}

// 3. Función para actualizar la cantidad de un producto
function actualizarCantidad(nombre, cantidad) {
  let producto = inventario.find(item => item.nombre === nombre);
  if (producto) {
    producto.cantidad += cantidad;
  } else {
    console.log("Producto no encontrado");
  }
}

// 4. Función para calcular el valor total del inventario
function calcularValorInventario() {
  let valorTotal = 0;
  inventario.forEach(producto => {
    valorTotal += producto.precio * producto.cantidad;
  });
  return valorTotal;
}

// 5. Función para obtener productos en un rango de precios
function productosEnRangoDePrecio(min, max) {
  return inventario.filter(producto => producto.precio >= min && producto.precio <= max);
}

// --- Ejecución del programa ---

// Agregar un nuevo producto
agregarProducto("Sombrero", 12, 150);

// Mostrar inventario actualizado
console.log("📦 Inventario actualizado:");
console.table(inventario);

// Calcular valor total del inventario
let valorTotal = calcularValorInventario();
console.log("💰 Valor total del inventario:", valorTotal);

// Obtener productos en un rango de precios
let productosRango = productosEnRangoDePrecio(10, 20);
console.log("🎯 Productos entre 10 y 20:");
console.table(productosRango);

// Ejemplo: Actualizar cantidad
actualizarCantidad("Camiseta", 20);
console.log("🔄 Inventario después de actualizar 'Camiseta':");
console.table(inventario);

// Actualizar cantidad de un producto
actualizarCantidad("Camiseta", 20);

// Calcular valor total del inventario
console.log("Valor total del inventario:", calcularValorInventario());

// Obtener productos con precio entre 10 y 30
console.log("Productos en rango de precio 10-30:", productosEnRangoDePrecio(10, 30));
