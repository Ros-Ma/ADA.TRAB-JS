//este ejercicio solicita mostrar un mensaje
const prompt = require ('prompt-sync')();
//se requiere que el usuario ingrese un nombre
let nombre = prompt ("Ingrese nombre: ");
//imprimimos el saludo
console.log (`Hola: `+ nombre);