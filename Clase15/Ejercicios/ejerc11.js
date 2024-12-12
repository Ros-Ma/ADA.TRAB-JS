//Gestión de inventario de una tienda
//Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
//let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
//Debes realizar las siguientes acciones:

//Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.

//Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.

//Eliminar el primer producto del inventario.
//Mostrar la lista actualizada de productos en una sola cadena, separados por comas
let inventario = ['Laptop', 'Teclado', 'Mouse', 'Monitor'];
inventario.push('Impresora');
console.log (inventario);
let incTablet = inventario.includes('Tablet');
console.log ('Tablet esta incluido: ' +incTablet);
inventario.shift();
let comas = inventario.join(', ');
console.log (comas);

