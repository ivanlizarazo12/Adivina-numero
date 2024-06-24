let numeroSecreto = 0;
let intentos = 0;


function asignartextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);  
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if ( numeroDeUsuario === numeroSecreto) {
        asignartextoElemento('p',`Acertaste al numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled') 
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignartextoElemento('p','El numero es menor')
        } else {
            asignartextoElemento( 'p', 'El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    } 
    return;    
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    return  Math.floor(Math.random()*10)+1;
    
}
function condicionesIniciales() {
    asignartextoElemento('h1','Adivina el numero secreto!');
    asignartextoElemento('p','Indica un numero de 1 a 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');  
}
 
condicionesIniciales();

