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