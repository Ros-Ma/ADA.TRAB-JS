//Ejercicio 6:
//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso.
const prompt = require ('prompt-sync')();
let edad = parseFloat (prompt("Ingrese su edad: "));
if ( edad >= 18) {
    console.log ("Sos mayor de edad.")
}
else {
    console.log ("Sos menor de edad.")
}