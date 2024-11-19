//interpreto lo que me pide el ejercicio
//declaro el prompt
const prompt = require('prompt-sync')();
//solicito que el usuario ingrese los números
let num1 = parseFloat(prompt("Ingrese un número: "));
let num2 = parseFloat(prompt("Ingrese otro número: "));
//hago los condicionales para saber si el numero es mayor o
if (num1 > num2) {
    console.log ("El número de mayor valor es: " + num1)
}
else if ( num1< num2) {
    console.log ("El numero de mayor valor es:" + num2)
}
else {
    console.log ("Los números ingresados son iguales")
}