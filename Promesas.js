//Promesa 7

// Crea una función realizarOperacionesAsincronas que toma un array de funciones que devuelven promesas.
//  La función debe ejecutar estas operaciones de forma secuencial, resolviendo cada promesa antes de pasar a la siguiente. 
//  Si alguna promesa es rechazada, la función debe detenerse y rechazar con el motivo.

async function realizarOperacionesAsincronas(arrayDeFunciones) {
    try {
      await Promise.all(arrayDeFunciones.map(funcion => funcion()));
    } catch (error) {
      throw error;
    }
  }
  
  const Promesa1 = () => new Promise(
    (resolve) => setTimeout(() =>
      resolve('Promesa 1 completa'), 900)
  );
//   const Promesa2 = () => new Promise(
//     (resolve, reject) => setTimeout(() =>
//       resolve('Promesa 2 completa'), 800)
//   );
  
  const Promesa2 = () => new Promise(
    (resolve, reject) => setTimeout(() =>
      reject('Promesa 2 FALLIDA'), 800)
  );
  
  const Promesa3 = () => new Promise(
    (resolve) => setTimeout(() =>
      resolve('Promesa 3 completa'), 700)
  );
  
  const arrayDeFunciones = [Promesa1, Promesa2, Promesa3];
  
  realizarOperacionesAsincronas(arrayDeFunciones)
    .then(() => console.log('Todas las operaciones completadas'))
    .catch((error) => console.error('Error:', error));
  

//PRETIER
//SONARLINE