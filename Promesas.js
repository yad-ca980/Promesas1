// 

let user  ={
    name: "Yad",
    age: 21
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
})

.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('error en la peticion');
    console.log(error)
;})
