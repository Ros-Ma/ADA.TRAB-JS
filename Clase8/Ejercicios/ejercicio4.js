//interpreto el problema a resolver
//analizo que condicionales van a ir en este ejercicio
const prompt= require('prompt-sync')();
//pido al usuario que ingrese un número entero
let numero = parseFloat(prompt("Ingrese un número entero: "));
// realizamos la operacion para saber si es par o impar
if (numero % 2 == 0) {
console.log = ("El número es par")
}
else {
console.log = ("El número es impar")
}