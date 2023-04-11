var body = document.querySelector("body");


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

for (let i=0; i<destinos.length; i++){ //executa 3 vezes
    let destino = destinos[i];

    let banner = document.createElement("div"); //criando a div
   
    banner.className = "banner"; //atribuindo uma classe para a div
    banner.style.backgroundImage= "url("+ destino.imagem +")"; //vai atribuir a url da imagem como background

    let dest = document.createElement("p");
    dest.innerHTML = destino.destino;

    let desc = document.createElement("p");
    desc.innerHTML = destino.descricao;

    
    body.appendChild(banner);//adicionando um novo filho ao body
    banner.appendChild(dest);
    banner.appendChild(desc);
    console.log(banner);
}