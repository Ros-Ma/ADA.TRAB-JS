//Ejercicio 3 – Constantes / Validación de Edad:
//Más adelante vamos a querer validar que nuestros encuestados sean de
//18 años de edad mínima y 99 años de edad máxima.
//Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas
//en dos constantes (asignándoles los valores numéricos 18 y 99
//respectivamente). Por último, Deberás pedirle al usuario que ingrese su
//edad para validarla usando parseInt.
//Desglosando el ejercicio deberás:
//1. Crea una constante llamada EDAD_MINIMA y otra llamada
//EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18
//y 99 respectivamente.
//. Pide al usuario que ingrese su edad.
//3. Usa “parseInt” para convertir la entrada del usuario a un número

//4. Valida si la edad ingresada está dentro del rango permitido y
//muestra un mensaje adecuado.
//Pista: Las constantes se declaran con la palabra reservada const y es
//buena práctica que sus nombres sean declarados siempre con letras
//mayúsculas. Utiliza parseInt para convertir la entrada del usuario a un
//número entero.


const prompt = require('prompt-sync')();
const EDAD_MAXIMA = 99;
const EDAD_MINIMA = 18;
let edad = parseInt(prompt("Ingrese su edad: "));
if (edad>= 18 && edad <= 99);{
console.log ("La edad está dentro del rango.")
}

