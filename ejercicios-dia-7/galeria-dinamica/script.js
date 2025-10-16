const inputImg = document.getElementById("imgUrl");
const btnImg = document.getElementById("btnAgregarImg");
const galeria = document.getElementById("galeria");
const contadorImgs = document.getElementById("contadorImgs");

let totalImgs = 0;

btnImg.addEventListener("click", () => {
  const url = inputImg.value.trim();
  if (!url) return;

  // Crear contenedor de imagen
  const contenedorImg = document.createElement("div");
  contenedorImg.classList.add("contenedorImg");

  // Crear imagen
  const img = document.createElement("img");
  img.src = url;

  // Crear botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";

  btnEliminar.addEventListener("click", () => {
    contenedorImg.remove();
    totalImgs--;
    contadorImgs.textContent = totalImgs;
  });

  contenedorImg.appendChild(img);
  contenedorImg.appendChild(btnEliminar);
  galeria.appendChild(contenedorImg);

  totalImgs++;
  contadorImgs.textContent = totalImgs;

  inputImg.value = "";
});
