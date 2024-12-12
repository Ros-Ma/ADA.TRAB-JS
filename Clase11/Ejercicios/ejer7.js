//Ejercicio 7: Calculadora simple
//Consigna: Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.
const prompt = require('prompt-sync')();
let number1 = parseFloat(prompt("Ingrese un número: "));
let number2 = parseFloat(prompt("Ingrese otro número: "));
let operacion = prompt("Ingrese la operación a realizar(+,-,*,/): ").toLowerCase();

switch (operacion) {
    case '+' :
         console.log ("La suma de los números es: " + (number1 + number2));
    break;
    case'-':
        console.log ("La resat de los números es: " +(number1 - number2));
    break;
    case '*':
            console.log ("La multiplicación de los números es: "+ (number1 * number2));
    break;
    case '/':
                if(number2 !== 0) {
                console.log ("La division de los números es: " +(number1 / number2))
            }
                else {
                console.log ("Error, no se puede dividir por cero")
            }


    break;
    default:
                 console.log("Error, operación no válida")
    
}
