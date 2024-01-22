//ejercicio3

fetch('https://www.google.com.mx/?hl=es')
.then(resp => resp.text())
.then(html => {
    document.open()
    document.write(html)
    document.close()
})

