

// // Ejercicio7
// fetch("https://fakestoreapi.com/products/1")
// .then(resp  => {

//   resp.json().then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log("Error en la petición")
//     console.log(err);
//   })
// })


// ejercicio7.1

fetch("https://rickandmortyapi.com/api/character/800")
  .then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    else {
      throw new Error("No se pudo completar la petición")
    }
  })
  .then(console.log)
  .catch(err => {
    console.log("Error en la petición")
    console.log(err)
  });







