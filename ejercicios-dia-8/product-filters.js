const productos = [
  { nombre: "Camiseta", categoria: "ropa" },
  { nombre: "Zapatos", categoria: "calzado" },
  { nombre: "Pantalón", categoria: "ropa" },
  { nombre: "Reloj", categoria: "accesorios" }
];

document.getElementById("buscar").addEventListener("click", () => {
  const categoria = document.getElementById("filtro").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const filtrados = productos.filter(p => p.categoria.toLowerCase() === categoria);

  if (filtrados.length === 0) {
    resultado.innerHTML = "<li>No se encontraron productos.</li>";
  } else {
    filtrados.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.nombre;
      resultado.appendChild(li);
    });
  }
});
