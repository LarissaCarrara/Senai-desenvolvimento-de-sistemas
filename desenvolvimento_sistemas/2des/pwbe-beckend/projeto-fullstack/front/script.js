const form = document.querySelector("#form");
const impnome = document.querySelector("#nome");
const impingre = document.querySelector("#ingredientes");
const impmodo = document.querySelector("#modo");
const imppor = document.querySelector("#porcoes");




function cadastrar(){
alert("sucesso");

let dados = 
{
    "nome":impnome.value,
    "ingredientes": impingre.vale,
    "modo": impmodo.value,
    "porcoes": imppor.value 
}

localStorage.setItem("receita", JSON.stringify(dados));
 window.location.href = "./receita.html"

    //abrir aula 08 fe
}