//Ejercicio 5: Encuentra los números pares entre dos valores
//Consigna: Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos

const prompt = require('prompt-sync')();
let inicio = parseInt (prompt("Ingrese un número entero para iniciar: "));
let fin = parseInt (prompt ("Ingrese un número entero para finalizar: "));

if (inicio > fin ) {
    console.log ("El número de inicio no es válido, ingrese número de menor valor: " );

} 
else {
console.log ("Los números pares entre "+ inicio, " y "+ fin, "son: ");
    for ( let i = inicio ; i <= fin; i ++) {
        if ( i % 2 === 0) {
            console.log (i)
        
      }  
    } 
} 


