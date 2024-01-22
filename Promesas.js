// Crea una función esperarNVeces que tome un número n y devuelva una promesa.
// Esta promesa debe resolverse con el mensaje "¡He esperado N veces!" después de esperar 1 
// segundo por cada número del 1 al n. Por ejemplo, si n es 3, la promesa debería resolverse 
// después de esperar 1 segundo, luego 2 segundos, y finalmente 3 segundos.


function esperarNVeces(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('¡He esperado ' + n + ' veces!');
            resolve();
        }, n * 1000);
    });
}

async function esperar3Veces() {
    await esperarNVeces(1);
    await esperarNVeces(2);
    await esperarNVeces(3);
}

esperar3Veces();
