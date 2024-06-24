// PRIMEROS DESAFIOS 

// Crear una función que muestre 
// "¡Hola, mundo!" en la consola.
function saludar() {
    console.log("hello world");
}
saludar();

// Crear una función que reciba un nombre
//  como parámetro y muestre "¡Hola, [nombre]!"
//   en la consola.

function saludarPorNombre(nombre) {
    console.log(`Hola ${nombre}`);
}
saludarPorNombre("juan");

// Crear una función que reciba un número
//  como parámetro y devuelva el doble de ese número.
function numeroAlDoble(numero) {
    console.log(numero*2);
}
numeroAlDoble(10);

// Crear una función que reciba tres números
//  como parámetros y devuelva su promedio.
function promedio(a,b,c) {
    let suma = a+b+c;
    console.log(suma/3);
    
}
promedio(3,3,6)

// Crear una función que reciba dos números como parámetros
//  y devuelva el mayor de ellos.
function devuelveMayor(a,b) {
    if (a > b) {
        console.log(a);
    } else if( a < b) {
        console.log(b);
    } else (console.log("son iguales"));
    
}
devuelveMayor(132,132);

// Crear una función que reciba un número como parámetro y
//  devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicarPorEl(numero) {
    console.log(numero*numero);
    
}
multiplicarPorEl(8);


