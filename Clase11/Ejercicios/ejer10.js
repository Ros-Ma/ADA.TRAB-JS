//Ejercicio 10: Adivina el número
//Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.
const prompt = require('prompt-sync')();
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

for (let i = 0; i < 3; i++) {
  let numeroUsuario = prompt(`Intento ${i + 1}: ¿Cuál es el número secreto? `);
  numeroUsuario = parseInt(numeroUsuario);

  if (numeroUsuario === numeroSecreto) {
    console.log (`¡Felicidades! Adivinaste el número secreto en ${i + 1} intentos.`);
    break;
    
  } else if (numeroUsuario < numeroSecreto) {
    console.log ("El número secreto es mayor que el que ingresaste.")
  } else {
    console.log ("El número secreto es menor que el que ingresaste.")
  }

}
   if (intentos === 3) {
  console.log (`Lo siento, no adivinaste el número secreto. El número secreto era ${numeroSecreto} : `)
   } 


