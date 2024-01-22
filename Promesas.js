//ejercicio2

fetch("http://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((respJson) =>{
    console.log(respJson);
    console.log(respJson.price);

  })
  .catch((error) => console.log(error));