// cosas importantes
//""comillas dobles-> solo para texto
//´´comillas simples-> solo para texto
// ``bastik => me sirven para concatenar texto y nombre variable
//declaracion de variables
// ${} dentro esta el nombre de la variable que quiero mostrar
const prompt = require("prompt-sync") ();
let Nombre = "Rosana";
const Edad = 49;
console.log( `Hola, mi nombre es ${Nombre} y tengo ${ Edad} anios`);
//cambiar valor a una variable
Nombre = "Rosi";
// edad =30, da error porque es una constante
console.log(`Ahora mi nombre es ${ Nombre} y tengo ${Edad}`);
