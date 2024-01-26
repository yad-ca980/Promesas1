fetch('not-fount.html')
.then(resp => resp.text)
.then(html => {
  document.querySelector('body').innerhtml = html
})
.catch(err => {
  console.log("Error en la petición")
  console.log(err)
})