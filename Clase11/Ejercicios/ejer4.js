//Ejercicio 4: ¿Es par o impar?
//Consigna: Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Ingrese un número: "));
let par = (num % 2 == 0);

par ? 
console.log ('El número es par; al dividirlo por dos, su cociente da cero.') :
console.log ('El número es impar porque al dividir su cociente da uno.');



