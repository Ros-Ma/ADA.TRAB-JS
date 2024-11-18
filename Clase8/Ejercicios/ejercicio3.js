//primero identifico que operacion voy a realizar
//declaro el prompt
const prompt = require ('prompt-sync')();
//solicito al usuario que ingrese un numero y luego otro

let numero1 = parseFloat(prompt("Ingrese un número: "));
let numero2 = parseFloat(prompt("Ingrese un segundo número: "));
//se realiza la operacion correspondiente
let suma = (numero1 + numero2);

    console.log ( `La suma de los números es:` + suma);
    
