// Creamos un array llamado "dias" con los días de la semana
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// Usamos el método .shift() para eliminar el PRIMER elemento del array
// En este caso, se elimina "Lunes"

dias.shift();

// Mostramos en consola el array actualizado
// Ahora el primer elemento ("Lunes") ya no está
console.log(dias);

// Resultado: ["Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
