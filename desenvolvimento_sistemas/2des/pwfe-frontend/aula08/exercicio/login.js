const pemail = document.querySelector("#email");
const psenha = document.querySelector("#senha");


const dados_corretor = 
[
    {
        "nome": "Alberto Adalberto",
        "matricula":132455,
        "senha": "abc123",
        "salario":2570.80,
        "responsavel":[
            {
                "cod":"ca1423",
                "endereco": "Rua das ruas, 43",
                "valor":455000
            },
            {
                "cod":"ap1321",
                "endereco": "Rua das avenidas, 36",
                "valor":455000
            }
        ]
    },
    {
        "nome": "Jair Javindo",
        "matricula":132455,
        "senha": "asd321",
        "salario":2570.80,
        "responsavel":[
            {
                "cod":"ca3321",
                "endereco": "Rua sem calçada, 59",
                "valor":455000
            },
            {
                "cod":"ap1221",
                "endereco": "Alameda dos santos, 36",
                "valor":455000
            }
        ]
    }
]

function login(){
    
        let email = pemail.value;
        let senha = psenha.value;
    
    let usuario = dados_corretor.find((user)=>{
        return ((user.matricula == email) && user.senha == senha);
      
    })

    if(usuario!= undefined){
        alert("acesso permitido");
        let info = {
            "nome": usuario.nome,
            "matricula": usuario.matricula,
            "responsavel": usuario.responsavel
        }
        localStorage.setItem("corretor", JSON.stringify(info));
        window.location.href = "./item.html"
    }else{
        alert("acesso negado");
    }
}