//Ejercicio 2: Do While
//Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234
const prompt = require('prompt-sync')();
let contraSe;

do{
    contraSe = prompt("Ingrese la contraseña correcta: ")
        

}while (contraSe !== "1234");
console.log("Clave correcta!");



