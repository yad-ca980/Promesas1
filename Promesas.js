//Promesa 5

const sumarLento = (numero) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                 resolve(numero + 1);
                // reject("Error")
            }, 800);
        }
    )
}

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    }
    )
}
// Si una falla fallan todas
Promise.all(([ sumarRapido(6),sumarLento(5), true, 'Hola' ]))
.then((resultados) => {
    console.log(resultados);
}).catch(console.log);