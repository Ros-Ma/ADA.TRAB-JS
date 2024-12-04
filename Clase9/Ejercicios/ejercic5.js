//Ejercicio 5:
//Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres
const prompt = require ('prompt-sync')();
let num1 = parseFloat(prompt ("Ingrese un número: "));
let num2 = parseFloat(prompt ("Ingrese otro número distinto del primero: "));
let num3 = parseFloat(prompt ("Ingrese un tercer número distinto de los anteriores: "));
if (num1 > num2 && num1 > num3) {
    console.log ("El mayor valor es el primer número")
}
else if (num1 < num2 && num2 > num3) {
console.log ("El número de mayor valor es el segundo.")
}
else {
    console.log ("El tercer número es de mayor valor")
}
