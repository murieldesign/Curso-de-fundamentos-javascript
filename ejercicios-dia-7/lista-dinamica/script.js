const inputItem = document.getElementById("itemInput");
const btnAgregar = document.getElementById("addItemBtn");
const lista = document.getElementById("listaCompras");
const contador = document.getElementById("contador");

let total = 0;

// Evento click para agregar item
btnAgregar.addEventListener("click", () => {
  const valor = inputItem.value.trim();
  if (!valor) return; // No agregar si está vacío

  // Crear elemento de lista <li>
  const li = document.createElement("li");
  li.textContent = valor;

  // Botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  // Evento para eliminar <li> y actualizar contador
  btnEliminar.addEventListener("click", () => {
    li.remove();
    total--;
    contador.textContent = total;
  });

  // Añadir botón al <li> y <li> a la lista
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  // Actualizar contador
  total++;
  contador.textContent = total;

  inputItem.value = ""; // Limpiar input
});
