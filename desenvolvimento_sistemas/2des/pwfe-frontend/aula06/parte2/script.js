const tarefa = document.querySelector("#tarefa"); //input
const listaPendentes = document.querySelector("#pendentes"); 
const listaFinalizadas = document.querySelector("#finalizadas"); 
const card= document.querySelector(".card");

function cadastrar() {
    let clone = card.cloneNode(true);

    clone.classList.remove("model");//removendo a classe model
    clone.querySelector("p").innerHTML = tarefa.value;
    listaPendentes.appendChild(clone);


    //quando clicar no botao concluir
    clone.querySelector("button").addEventListener("click", (e)=>{
        let elemento = e.target.parentNode;
        listaFinalizadas.appendChild(elemento);
    })//recebe o click, ele sabe em qual card vc está clicando
}