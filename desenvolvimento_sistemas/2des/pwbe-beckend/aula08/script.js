const inpemail = document.querySelector("#email");
const inpsenha = document.querySelector("#senha");

const base = [
    {
        "email":"larissa.carrara@hotmail.com",
        "senha":"123",
        "nome": "teste testador",
        "id": 4
    },
    {
        "email":"jaum@gmail",
        "senha":"4321",
        "nome": "Jaun Victor",
        "id": 5
    },
    {
        "email":"zeh@gmail",
        "senha":"1357",
        "nome": "zé da couve",
        "id": 6
    }
]
function autenticar(){ 
    //passando o valor de input para as variaveis
    let email = inpemail.value;
    let senha = inpsenha.value;

    
    let usuario =  base.find((user)=>{
        return ((user.email == email)&& (user.senha == senha));
    })

    if(usuario != undefined){
        let info = {
            "id":usuario.id,
            "nome":usuario.nome
        }
        localStorage.setItem("usuario", JSON.stringify(info)); //joga para o local storage as informações do json

        window.location.href = "./home.html"; //troca a pagina
    }else{
        alert("sai fora");
    }
}
    //mandando para o backand
    
    // let infoUsuario = {
    //     "email": email,
    //     "senha": senha
    // }
    // let options = {
    //     "method": "POST",
    //     "headers": {
    //         "Content-Type": "application/json"
    //     },
    //     "boddy": JSON.stringify(infoUsuario)
    // };

    // fetch("http://hostapi.com:3000/login", options).then(resp => {
    //     return resp.json()
    // }).then(data =>{
    //     data= {
    //     "id": 1,
    //     "username": "Fulano",
    //     "role": "Gerente"
    //    }
    //    console.log(data);
    // });

//front
//     if((email == "fulano@gmail")&& (senha=="123")){
//         alert("Login com sucesso");
//         let info = {
//             "username": "fulano da silva",
//             "userId": 5
//         }
//         localStorage.setItem("userdata", JSON.stringify(info));

//         window.location.href= "./home.html";
        
//     }else{
//         alert("Login invalido");
//     }
