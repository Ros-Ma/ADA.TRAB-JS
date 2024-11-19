// primero analizo que variables usar
const prompt = require ('prompt-sync')();
const nom = "Rosana";
let nom2 = prompt("Ingresa tu nombre: ");
if (prompt (nom === nom2)) {
    console.log ("El nombre es igual")
}
else {
    console.log ("")
}