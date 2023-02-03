// var dados = document.querySelectorAll("p");
// console.log(dados);


var pNome = document.querySelector("#nome");
var pDescricao = document.querySelector("#descricao");
var pValor = document.querySelector("#valor");

var dados = {
    "nome": pNome.innerHTML,
    "descricao": pDescricao.innerHTML,
    "valor": pValor.innerHTML
}

var novosDados = {
    "nome": "Ventilador",
    "descricao": "refresca",
    "valor": 500
}

pNome.innerHTML = novosDados.nome;
pDescricao.innerHTML = novosDados.descricao;
pValor.innerHTML=novosDados.valor;