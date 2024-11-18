//primero leo varias veces para entender el problema
//no olvidarse de declarar el prompt
const prompt = require('prompt-sync')();
// se solicita al usuario que ingrese unumero

let numero= parseFloat(prompt("Ingrese un numero: "));

//ponemos las condiciones si es positivo, negativo o cero
if (numero > 0 ) {
    console.log("El numero ingresado es positivo. ")
}
else if (numero < 0) {
    console.log("El numero ingresado es negativo. ")
}
else {
    console.log ("El numero es cero.")
}