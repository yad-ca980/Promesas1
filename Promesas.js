// Ejercicio6 
//Solicitud a una API fetch

fetch("https://fakestoreapi.com/products/1")
.then(resp  => resp.json())
.then(data => console.log(data))

