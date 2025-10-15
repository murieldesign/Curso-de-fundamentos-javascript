
//Función que cuenta cuántas vocales hay en un texto

function contarVocales(texto) {
  let contador = 0; // Inicializa el contador de vocales en 0
  let vocales = "aeiouAEIOU"; // Define todas las vocales, tanto minúsculas como mayúsculas
  //Recorre cada carácter del texto
  for (let i = 0; i < texto.length; i++) {
    // Si el carácter actual está dentro del string 'vocales', aumenta el contador
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }
  //Devuelve el número total de vocales encontradas
  return contador;
}

console.log(contarVocales("Hola Mundo")); // 4