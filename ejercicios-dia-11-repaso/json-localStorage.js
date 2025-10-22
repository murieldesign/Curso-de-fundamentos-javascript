let usuario = { nombre: "Ana", edad: 25 };
 // localStorage guarda información localmente en el navegador.
localStorage.setItem("usuario", JSON.stringify(usuario));

let datos = JSON.parse(localStorage.getItem("usuario"));
console.log(datos.nombre); // "Ana"
