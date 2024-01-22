function promesaConTimeout(promesa, tiempoLimite) {
    const promesaConTimeout = new Promise((resolve, reject) => {
      const temporizador = setTimeout(() => {
        reject("Tiempo agotado");
      }, tiempoLimite);
  
      promesa.then((resultado) => {
        clearTimeout(temporizador);
        resolve(resultado);
      }).catch((error) => {
        clearTimeout(temporizador);
        reject(error);
      });
    });
  
    return promesaConTimeout;
}

const promesaLenta = new Promise((resolve) => setTimeout(() => resolve("¡Promesa resuelta!"), 2000));
const tiempoLimite = 1000;

promesaConTimeout(promesaLenta, tiempoLimite)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error("Error:", error));