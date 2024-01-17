let promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa exitosa");
    }, 3000);
});


promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});