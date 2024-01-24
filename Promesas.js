// Almacena de manera local una imagen dentro de este Proyecto
// en la carpeta img realiza una solicitud fetch a 
// esa imagen Muestra la imagen en el navegador

const rutaImagenLocal = './img/Map.png';

function mostrarImagen() {
  fetch(rutaImagenLocal)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar la imagen. Estado: ${response.status}`);
      }
      return response.blob();
    })
    .then(blob => {
      const imageUrl = URL.createObjectURL(blob);
      const imagen = new Image();
      imagen.src = imageUrl;

      document.body.appendChild(imagen);
    })
    .catch(error => {
      console.error('Error al cargar la imagen:', error);
    });
}
mostrarImagen();

