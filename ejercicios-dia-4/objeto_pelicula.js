// Creamos un objeto llamado "pelicula" con tres propiedades: título, género y año.
let pelicula ={
    titulo:"El señor de los anillos",
    genero:"Fantasía",
    año:2001,
};
// Usamos el operador "delete" para eliminar una propiedad del objeto.
// En este caso, eliminamos la propiedad "año" del objeto "pelicula".
delete pelicula.año;

// Mostramos en consola el objeto "pelicula" actualizado.
console.log(pelicula);
// Ya no debería aparecer la propiedad "año".
