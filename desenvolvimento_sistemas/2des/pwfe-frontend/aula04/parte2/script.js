var banner = document.querySelector(".banner");
var destino = document.querySelector("#destino");
var descricao = document.querySelector("#descricao");

var destinos= [
{
    "imagem": "https://s2.glbimg.com/dlUy_fGZ_-lqXNr7plKAXFoXGHI=/e.glbimg.com/og/ed/f/original/2018/02/21/pyramids-2159286_1920.jpg",
    "destino": "Egito",
    "descricao": " A partir de R$4000,00"
},

{
    "imagem": "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg",
    "destino": "Rio de Janeiro",
    "descricao": "A partir de R$700,00"
},

{
    "imagem": "https://inglaterrabrasil.com.br/wp-content/uploads/sites/8/2022/08/conheca-londres.jpg",
    "destino": "Londres",
    "descricao": "A partir de R$4000,00"
}

]

let indice = gerarNumero(destinos.length);

destino.innerHTML = destinos[indice].destino;
descricao.innerHTML = destinos[indice].descricao;
banner.style.backgroundImage = "url(" + destinos[indice].imagem + ")"; //`url(${destinos[0].imagem})`

function gerarNumero(size){
    let num = Math.floor(Math.random()*size);
    return num;
}