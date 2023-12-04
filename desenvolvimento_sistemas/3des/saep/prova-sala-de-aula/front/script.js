const body = document.querySelector("body");

function entrar(){
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    const usuario = {
        "email": email,
        "senha": senha
    }
    console.log(usuario)

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

                const dados = {
                    "email":email
                }
                
                const dadosString = JSON.stringify(dados);
                localStorage.setItem('dadosUsuario', dadosString);
            
                window.location.href = "./home.html";
                // window.location.href = `./cardapio.html?id=${id}`;
            }else{
                alert('usuário não encontrado')
            }
        })

}    

