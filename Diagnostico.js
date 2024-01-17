
//Una función que imprima un número más uno ejercicio 1

function incrementar(numero){
    return numero + 1;
}
//console.log(incrementar(1));


//Una función asíncrona ejercici

async function getapi() {
    const response = await fetch('https://rickandmortyapi.com/api/character/179');
    const data = await response.json();
   // console.log(data);
}
getapi()


//Imprimir en consola un conteo del 1 al 10 cada 800 ms ejercicio 3
let contador = 1;
let intervalo = setInterval(function() {
 //   console.log(contador);
    contador++;
    if (contador > 10) {
        clearInterval(intervalo);
    }
}, 800);


//Mostrar mensaje de error en caso de que la iteración anterior supere el valor 8

let contador1 = 1;
let intervalo1 = setInterval(function() {
   // console.log(contador1);
    contador1++;
    if (contador1 > 8) {
     //   console.error('Error: El contador ha superado el valor 8');
    }
    if (contador1 > 10) {
        clearInterval(intervalo1);
    }
}, 800);


//Imprimir dos funciones de manera asíncrona, el programa debe mostrar en terminal el inicio del proceso y el final del proceso ejercio 5

function funcion1() {
    return new Promise(resolve => {
        setTimeout(() => {
//            console.log('Función 1 completada');
            resolve();
        }, 1000);
    });
}

function funcion2() {
    return new Promise(resolve => {
        setTimeout(() => {
//            console.log('Función 2 completada');
            resolve();
        }, 2000);
    });
}

//console.log('Inicio del proceso');

Promise.all([funcion1(), funcion2()])
    .then(() => {
  //      console.log('Final del proceso');
    });