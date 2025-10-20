// Array de productos con nombre, precio, categoría y stock
const productos = [
  { nombre: "Mouse", precio: 25, categoria: "tecnología", stock: true },
  { nombre: "Teclado", precio: 40, categoria: "tecnología", stock: false },
  { nombre: "Monitor", precio: 150, categoria: "tecnología", stock: true },
  { nombre: "Tostadora", precio: 35, categoria: "hogar", stock: true },
  { nombre: "Lámpara", precio: 20, categoria: "hogar", stock: false },
  { nombre: "Notebook", precio: 800, categoria: "tecnología", stock: true },
  { nombre: "Plancha", precio: 50, categoria: "hogar", stock: true },
  { nombre: "Auriculares", precio: 60, categoria: "tecnología", stock: false }
];

// Obtenemos los elementos del DOM
const lista = document.getElementById("lista-productos");
const selectCategoria = document.getElementById("categoria");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("promedio");

// Evento al hacer clic en "Calcular promedio"
boton.addEventListener("click", () => {
  const categoriaSeleccionada = selectCategoria.value;

  // Filtramos los productos según la categoría elegida
  let productosFiltrados = categoriaSeleccionada === "todas"
    ? productos
    : productos.filter(p => p.categoria === categoriaSeleccionada);

  // Limpiamos la lista anterior
  lista.innerHTML = "";

  // Mostramos los productos filtrados
  productosFiltrados.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio} - ${p.stock ? "En stock" : "Sin stock"}`;
    lista.appendChild(li);
  });

  // Calculamos el promedio de precios
  const total = productosFiltrados.reduce((acc, prod) => acc + prod.precio, 0);
  const promedio = productosFiltrados.length > 0 ? total / productosFiltrados.length : 0;

  // Mostramos el resultado
  resultado.textContent = `Precio promedio: $${promedio.toFixed(2)}`;
});