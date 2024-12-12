//Ejercicio 1: While
//Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.
const prompt = require('prompt-sync')();
let num = parseInt(prompt("Ingrese un número: "));
let suma = 0 

while (num >= 0) {
    suma += num;

     num = parseInt(prompt("ingrese un número: "))
     
}
        console.log ("La suma de los números es: " + num);
    


    

