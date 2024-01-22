//Promesa 6

const sumarLento = (numero) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                 // resolve(numero + 1);
               reject("Error")
            }, 800);
        }
    )
}

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
            //reject("Error")
        }, 800);
    }
    )
}
//Compite con todas las promesas y hace la que se ejecuta más rápido
Promise.race(([ sumarLento(5),sumarRapido(6)]))
.then((resultados) => {
    console.log(resultados);
}).catch(console.log);