
function login(){
    
   const email = document.querySelector("#email").value;
   const senha = document.querySelector("#senha").value;


     const usuario = {
        "email": email,
        "senha": senha 
    }
    console.log(usuario);
    const options = {
        method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(usuario)
    }

    fetch('http://localhost:3000/login', options) .then(resp => {
            return resp.json();
        })
        .then(data => {
            console.log(data)
            if (data) {
                console.log(data);
               // window.location.href = 'home.html';
            }else{
                alert('Login ou senha inválido');
            }
        })
}