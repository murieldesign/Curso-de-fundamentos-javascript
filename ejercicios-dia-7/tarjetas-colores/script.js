const btnTarjeta = document.getElementById("btnAgregarTarjeta");
const contTarjetas = document.getElementById("contenedorTarjetas");
const contadorTarjetas = document.getElementById("contadorTarjetas");

let totalTarjetas = 0;

// Función para generar color aleatorio
function colorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

btnTarjeta.addEventListener("click", () => {
  totalTarjetas++;
  
  // Crear tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.textContent = `Tarjeta ${totalTarjetas}`;
  tarjeta.style.backgroundColor = colorAleatorio();

  // Evento click para eliminar tarjeta
  tarjeta.addEventListener("click", () => {
    tarjeta.remove();
    totalTarjetas--;
    contadorTarjetas.textContent = totalTarjetas;
  });

  contTarjetas.appendChild(tarjeta);
  contadorTarjetas.textContent = totalTarjetas;
});
