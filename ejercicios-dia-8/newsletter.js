document.getElementById("newsletter").addEventListener("submit", function(e) {
  e.preventDefault();

  let correo = document.getElementById("correo").value.trim();
  let respuesta = document.getElementById("respuesta");

  if (correo === "") {
    respuesta.textContent = "Por favor, introduce tu correo.";
  } else if (!correo.includes("@")) {
    respuesta.textContent = "Correo inválido.";
  } else {
    respuesta.textContent = "¡Gracias por suscribirte!";
  }
});
