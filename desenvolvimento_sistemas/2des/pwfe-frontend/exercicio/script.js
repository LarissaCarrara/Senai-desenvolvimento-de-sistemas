
let cliente = document.querySelector("#cliente");
let endereco = document.querySelector("#endereco");
let lanche = document.querySelector("#lanche");
let quantidade = document.querySelector("#qtd");
let footer = document.querySelector("footer");




function cadastrar(){

    pedido = {
        "cliente" : cliente.value,
        "endereco" : endereco.value,
        "lanche" : lanche.value,
        "quantidade" : quantidade.value
    }

    alert("Pedido realizado!");
    let card = document.createElement("div");
    card.className= "card";

    let clientep = document.createElement("p");
    clientep.innerHTML = "Cliente: ";
    clientep.className="tit";

    let pcliente = document.createElement("p");
    pcliente.className= "pcard";
    pcliente.innerHTML = pedido.cliente;

    card.appendChild(clientep);
    card.appendChild(pcliente);
    
    //endereço
    let enderecop= document.createElement("p");
    enderecop.innerHTML= "Endereço: ";
    enderecop.className="tit";
    let pendereco = document.createElement("p");
    pendereco.className= "pcard";
    pendereco.innerHTML = pedido.endereco;

    card.appendChild(enderecop);
    card.appendChild(pendereco);

    //lanche
    let lanchep= document.createElement("p");
    lanchep.innerHTML= "Lanche: ";
    lanchep.className="tit";
    let planche = document.createElement("p");
    planche.className= "pcard";
    planche.innerHTML = pedido.lanche;

    card.appendChild(lanchep);
    card.appendChild(planche);

    //quantidade
    let qtdp= document.createElement("p");
    qtdp.innerHTML= "Quantidade: ";
    qtdp.className="tit";
    let pqtd = document.createElement("p");
    pqtd.className= "pcard";
    pqtd.innerHTML = pedido.quantidade;

    card.appendChild(qtdp);
    card.appendChild(pqtd);

    //botao
    let botao = document.createElement("button");
    botao.innerHTML= "Concluir";
    botao.className="botaocard";

    botao.addEventListener("click", ()=>{
       movecard(card, botao);
    })
    card.appendChild(botao);

    //botao remove
    let botaoremove = document.createElement("button");
    botaoremove.className="botaoremove";

    let img = document.createElement("img");
    img.src = "./image/x.png";
    img.className ="x";

    botaoremove.addEventListener("click", ()=>{
        card.remove();
    })
    botaoremove.appendChild(img);
    card.appendChild(botaoremove);


    footer.appendChild(card);
    
}

function movecard(card, button) {
    button.addEventListener("click", () => {
        card.remove();
    })
    document.querySelector(".entrega").appendChild(card);
}