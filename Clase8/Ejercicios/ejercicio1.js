//interpreto el problema que se tiene que resolver
//veo que variables puedo usar
//que operaciones tengo que hacer
const prompt = require ('prompt-sync')({sigint:true});

let numero = parseFloat (prompt("Ingrese un número: "));
let doble = (numero*2);
console.log (`El doble de tu número es:`+ doble);
