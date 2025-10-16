const form = document.getElementById("formUsuario");
const contUsuarios = document.getElementById("contenedorUsuarios");
const contadorUsuarios = document.getElementById("contadorUsuarios");

let totalUsuarios = 0;

// Evento submit para agregar tarjeta
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!nombre || !edad || !email) return;

  // Crear tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  tarjeta.innerHTML = `
    <h3>${nombre}</h3>
    <p>Edad: ${edad}</p>
    <p>Email: ${email}</p>
  `;

  // Botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("btnEliminar");
  btnEliminar.addEventListener("click", () => {
    tarjeta.remove();
    totalUsuarios--;
    contadorUsuarios.textContent = totalUsuarios;
  });

  // Botón editar
  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.classList.add("btnEditar");
  btnEditar.addEventListener("click", () => {
    const nuevoNombre = prompt("Nuevo nombre:", nombre);
    const nuevaEdad = prompt("Nueva edad:", edad);
    const nuevoEmail = prompt("Nuevo email:", email);

    if (nuevoNombre) tarjeta.querySelector("h3").textContent = nuevoNombre;
    if (nuevaEdad) tarjeta.querySelectorAll("p")[0].textContent = `Edad: ${nuevaEdad}`;
    if (nuevoEmail) tarjeta.querySelectorAll("p")[1].textContent = `Email: ${nuevoEmail}`;
  });

  tarjeta.appendChild(btnEliminar);
  tarjeta.appendChild(btnEditar);
  contUsuarios.appendChild(tarjeta);

  totalUsuarios++;
  contadorUsuarios.textContent = totalUsuarios;

  form.reset();
});
