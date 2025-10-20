const productos = [];
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("producto").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const categoria = document.getElementById("categoria").value.trim();

  if (nombre === "" || isNaN(precio) || categoria === "") {
    document.getElementById("info").textContent = "Completa todos los campos correctamente.";
    return;
  }

  const nuevoProducto = { nombre, precio, categoria };
  productos.push(nuevoProducto);

  mostrarResumen();
  mostrarProductos(productos);
  document.getElementById("formulario").reset();
});

function mostrarResumen() {
  const total = productos.length;
  const suma = productos.reduce((acc, p) => acc + p.precio, 0);
  const promedio = (suma / total).toFixed(2);
  document.getElementById("info").textContent = `Total: ${total} | Promedio: $${promedio}`;
}

function mostrarProductos(lista) {
  const contenedor = document.getElementById("lista");
  contenedor.innerHTML = "";
  lista.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio} (${p.categoria})`;
    contenedor.appendChild(li);
  });
}

document.getElementById("filtrarBtn").addEventListener("click", () => {
  const filtro = document.getElementById("filtro").value.trim().toLowerCase();
  const filtrados = productos.filter(p => p.categoria.toLowerCase() === filtro);
  mostrarProductos(filtrados);
});

//  Modo oscuro
document.getElementById("modoOscuro").addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});
