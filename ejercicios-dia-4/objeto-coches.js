// Creamos un array llamado "coches", que contiene varios objetos.
// Cada objeto representa un coche con sus propiedades: marca, modelo y año.
let coches =[
    {marca:"Toyota", modelo:"Corrola", ano:"2020"},
    {marca:"Mercedes", modelo: "SLK", ano:"2019"},
    {marca:"Nissan", modelo:" Micra", ano:"2021"}
];

// Recorremos el array "coches" usando el método forEach().
// Este método ejecuta una función una vez por cada elemento del array.

coches.forEach (coche => {
    // En cada iteración, mostramos la información del coche en la consola
     // usando interpolación de texto (template strings con ${ }).
     console.log (`Marca: ${coche.marca}, Modelo: ${coche.modelo}, Año: ${coche.ano}`);


});

