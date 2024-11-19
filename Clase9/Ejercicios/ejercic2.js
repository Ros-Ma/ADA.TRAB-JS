// luego de leer el ejercicio declaro 2 constantes
const prompt = require ('prompt-sync')();
const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 100;
//solicitamos al usuario que ingrese un número
let nume = parseFloat(prompt("Ingrese un número: "));

if (nume >=1 && nume <=100) {
    console.log ("El número ingresado se encuentra dentro del rango")
}
else {
    console.log ("El número ingresado se encuentra fuera del rango")
}