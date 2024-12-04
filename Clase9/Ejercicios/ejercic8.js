//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)
const prompt = require ('prompt-sync')();
let ang1 = parseInt(prompt("Ingrese la longitud de uno de los lados de un triangulo: "));
let ang2 = parseInt(prompt("Ingrese la longitud de otro lado del triangulo: "));
let ang3 = parseInt(prompt(" Ingrese el tercer valor de la longitud del triangulo: "));
if ( ang1 == ang2 && ang1 == ang3) {
    console.log ("El triángulo es Equilátero, sus tres lados miden igual. ")
}
else if (ang1 == ang2 || ang2 == ang3 || ang3 == ang1) {
    console.log ("El triángulo es Isósceles, dos de sus lados son iguales. ")
}
else {
    console.log ("El triángulo es Escaleno. ")
}