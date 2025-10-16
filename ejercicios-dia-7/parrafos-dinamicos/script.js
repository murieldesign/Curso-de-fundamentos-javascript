// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

  // Seleccionamos los elementos del DOM
  const input = document.getElementById("inputTexto");
  const boton = document.getElementById("btnAgregar");
  const contenedor = document.getElementById("contenedorParrafos");

  // Evento click para agregar un párrafo
  boton.addEventListener("click", () => {

    // Obtener el texto del input y eliminar espacios
    const texto = input.value.trim();

    // Si el input está vacío, no hacer nada
    if (!texto) return;

    // Crear un nuevo elemento <p>
    const p = document.createElement("p");

    // Agregar el texto al párrafo
    p.textContent = texto;

    // Evento click para eliminar el párrafo al hacer clic sobre él
    p.addEventListener("click", () => {
      p.remove();
    });

    // Agregar el párrafo al contenedor
    contenedor.appendChild(p);

    // Limpiar el input
    input.value = "";
  });
});