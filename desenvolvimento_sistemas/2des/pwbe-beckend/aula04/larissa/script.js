
var cadastro = document.querySelector("#cadastro");

cadastro.addEventListener('submit', e =>{
    e.preventDefault();
})
function Cadastrar() {

var id = document.querySelector("#id");
var nome = document.querySelector("#nome");
var descricao = document.querySelector("#descricao");
var valor = document.querySelector("#valor");
var botao = document.querySelector("#botao");
var section = document.querySelector("section");
var tbody = document.querySelector("tbody");

const dados = {
    "id": id.value,
    "nome": nome.value,
    "descricao": descricao.value,
    "valor": valor.value
}
    var total =+ dados.valor; 
    var tr1 = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML= dados.id;
    var td2 = document.createElement("td");
    td2.innerHTML= dados.nome;
    var td3 = document.createElement("td");
    td3.innerHTML= dados.descricao;
    var td4 = document.createElement("td");
    td4.innerHTML= dados.valor;

    console.log(dados);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);

    tbody.appendChild(tr1);
}
