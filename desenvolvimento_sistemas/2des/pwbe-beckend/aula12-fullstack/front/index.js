
const body = document.querySelector("body");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");


function entrar(){
    const usuario = {
        "email": email.value,
        "senha": senha.value 
    }
    console.log(usuario);

    fetch('http://localhost:3000/login', 
    {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(usuario)
    }) .then(resp => {
            return resp.status;
        })
        .then(data => {
            if (data == 202) {
                console.log(data);
                window.location.href = "./home.html";
            }
        })

}