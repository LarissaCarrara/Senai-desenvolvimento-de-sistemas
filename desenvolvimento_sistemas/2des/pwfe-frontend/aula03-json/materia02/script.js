/*
getElementById (id)
getElementsByTagName (tag)
getElemntsByClassName (class)
-mostra todos os correspondentes

OU 

querySelector("") - #id/.class /tag
- mostra o primeiro que encontrar

OU

querySelectorALL("")
- mostra todos os correspondentes
*/


//var titulo = document.getElementById("titulo");
//var titulo = document.querySelector("#titulo");
//var titulo = document.querySelectorAll("#titulo");

//var titulos = document.getElementsByTagName("h1");
//var titulo = document.querySelector("h1"); 
//var titulo = document.querySelectorAll("h1");

//var textos = document.getElementsByClassName("texto");
//var titulo = document.querySelector(".texto");
//var titulo = document.querySelectorAll(".texto");
//console.log(texto);


//var texto = paragrafo.innerHTML; //acessar o conteudo
// paragrafo.innerHTML = "a informação que eu quiser"; //muda o conteudo

//ESTILIZAÇÃO
// paragrafo.style.color = "red";
// paragrafo.style.fontSize= "2rem"; // 1 rem = 16px


// var paragrafo = document.querySelector("p");  
// paragrafo.classList.add("m1"); //m1 está estilizando o paragrafo
// paragrafo.classList.remove("m1"); //removendo a classe

// paragrafo.classList.add("m2");//adicionando a classe
// console.log(paragrafo.classList); //mostrando as classes do paragrafo


// var body = document.querySelector("body"); //encontrando a tag body
// //body.classList.remove("light");
// body.className= "dark"; //mudando a classe para dark


// body.classList.add("m1");
// body.classList.toggle("m2"); // toggle- se tiver, ele tira, se não, ele coloca
// body.classList.toggle("m2");
// console.log(body.classList


//LISTANDO AS TAGS P

/*
var dados = document.querySelectorAll("p");

for(let i=0; i<dados.length; i++){
    console.log(dados[i].innerHTML);
}
*/

//pegou um informação e montou um json


var pNome = document.querySelector("#nome");
var pEndereco= document.querySelector("#endereco");
var pTelefone = document.querySelector("#telefone");
var pNascimento = document.querySelector("#nascimento");

let dados = {
    "nome": pNome.innerHTML,
    "endereco": pEndereco.innerHTML,
    "telefone": pTelefone.innerHTML,
    "nascimento": pNascimento.innerHTML
}
console.log(dados);


let info= {
    "nome": "fulano da silva",
    "endereco":"avenida brasil",
    "telefone": "16912786543",
    "nascimento": "12/09/2003"
}; //mudando as informações

pNome.innerHTML = info.nome; //atribuindo o novo nome
pEndereco.innerHTML=info.endereco;
pNascimento.innerHTML= info.nascimento;
pTelefone.innerHTML= info.telefone;