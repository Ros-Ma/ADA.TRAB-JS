//Ejercicio 4:
//Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre. primero analizo que variables usar
const prompt = require ('prompt-sync')();
const nom = "Rosana";
let nom2 = prompt("Ingresa tu nombre: ");
if ( nom === nom2) {
    console.log ("El nombre ingresado y el mío son iguales")
}
else {
    console.log ("El nombre ingresado es distinto ")
}