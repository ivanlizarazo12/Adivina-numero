// Crea una función que calcule el índice de masa
//  corporal (IMC) de una persona a partir de su altura en metros y 
//  peso en kilogramos, que se recibirán como parámetros.
function calcularIMC() {
    let peso = prompt("Dijite su peso en kilogramos por favor.");
    let altura = prompt("dijite su altura en metros.");
    let IMC = peso / (altura ** 2); 
    console.log(IMC);
}
// calcularIMC();


// Crea una función que calcule el valor del
//  factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1; 
    } else {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// console.log(calcularFactorial(1));

// Crea una función que convierta un valor en dólares,
// pasado como parámetro, y devuelva el valor equivalente en 
// reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
// Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAPesos(dolares) {
    const tasaCambio = 4000;
    let pesos = dolares * tasaCambio;
    console.log(`Son ${pesos} pesos`);
}

// convertirDolaresAPesos(4);

// Crea una función que muestre en pantalla el área
//  y el perímetro de una sala rectangular, utilizando
//la altura y
//   la anchura que se proporcionarán como parámetros.
function areaRectangulo(largo,ancho) {
    let area = largo*ancho;
    console.log(`El area es de: ${area}`);
}

// areaRectangulo(5,2);




// Crea una función que muestre en pantalla el área y el perímetro
//  de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaCirculo(radio) {
    pi = 3,14;
    perimetro = 2*pi*radio;
    console.log(`El perimetro es de: ${perimetro}`);
    area = pi*radio**2;
    console.log(`el area es ${area}`);
}

// areaCirculo(5);

// Crea una función que muestre en pantalla la tabla
//  de multiplicar de un número dado como parámetro.
function multiplicarNumero(numero) {
    let repetir = 1;
    let resultado = 0;
    for ( repetir = 1; repetir <= 10; repetir++) {
        resultado = repetir*numero;
        console.log(resultado);
        
    }
};
multiplicarNumero(2)