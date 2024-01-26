function solicitud(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector("body").innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
      solicitud("not-found.html");
    });
}

solicitud("https://fakestoreapi.com/productss/");