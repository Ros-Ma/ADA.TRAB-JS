//primero declarar 2 variables booleanas
const prompt = require('prompt-sync')();
const condicion1 = true;
const condicion2 = false;
//pedir al usuario que ingrese 2 valores booleanos
let condi = (prompt("Ingrese un valor booleano: "));
let  condi2 = (prompt ("Ingrese un segundo valor booleano: "));
//hacer las condiciones 
if  (condicion1 == condi && condicion2 == condi2) {
    console.log ("Los valores ingresado son verdaderos")
}
else  {
    console.log ("Los valores ingresados son falsos")
}