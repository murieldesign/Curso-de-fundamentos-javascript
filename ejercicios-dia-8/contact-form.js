document.getElementById("contacto").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
  let estado = document.getElementById("estado");

  if (nombre === "" || email === "" || mensaje === "") {
    estado.textContent = "Todos los campos son obligatorios.";
  } else if (!email.includes("@")) {
    estado.textContent = "Correo no válido.";
  } else {
    estado.textContent = `Gracias, ${nombre}. Tu mensaje fue enviado.`;
  }
});
