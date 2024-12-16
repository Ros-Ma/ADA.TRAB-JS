//Encuentra los nombres más cortos y transforma su formato
//Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. Queremos realizar varias tareas con esta lista:

//Primero, filtra los nombres que tengan menos de 5 letras.

//Luego, transforma los nombres resultantes para que estén en mayúsculas.

//Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas.
//Al final, imprime la frase en la consola.
let nombres =['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];
let nombresCortos = nombres.filter(nombre => nombre.length < 5);
let nombresMayusculas = nombresCortos.map(nombre => nombre.toUpperCase());
let frase = `Los nombres seleccionados son: ${nombresMayusculas.join(", ")}`;
console.log (frase);


