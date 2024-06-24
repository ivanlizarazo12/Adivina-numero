// Crea una lista vacía llamada "listaGenerica".
listaGenerica = [];

// Crea una lista de lenguajes de programación llamada
// "lenguagesDeProgramacion con los siguientes elementos:
// 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
// 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push ('Java','Ruby', 'GoLang');
// Crea una función que muestre en la consola todos los 
// elementos de la lista "lenguagesDeProgramacion.
function mostrarElememetos() {
    console.log(lenguagesDeProgramacion);    
}

// Crea una función que muestre en la consola todos los
// elementos de la lista 
// "lenguagesDeProgramacion en orden inverso.
function mostrarElememetosInverso() {
    console.log(lenguagesDeProgramacion.reverse());    
}
// Crea una función que calcule el promedio de los
//  elementos en una lista de números.
let lista = [4, 3, 5, 1];
let suma = 0;
function promdeioNumeros() {
    

for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
}
let promedio = suma / lista.length;
console.log(`El promedio es: ${promedio}`);
}
promdeioNumeros();

