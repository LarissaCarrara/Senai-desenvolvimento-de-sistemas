const {nome, matricula,responsavel} = JSON.parse(localStorage.getItem("corretor"));
const h2 = document.querySelector("#h2");
const body = document.querySelector("body");
let totcomissao = 0; 
h2.innerHTML +=nome;

const dados = 
[
    {
    "matricula": 132455,
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
    "matricula": 132455,
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

const item = dados.find((i)=>{
    return i.matricula == matricula;
})
if (item != undefined){

    item.responsavel.forEach((info)=>{
        dados_resp(info.cod, info.endereco, info.valor);
    });
    
}

function dados_resp(cod,endereco, valor){
    
    let card = document.createElement("div");
    
    let cardnome = document.createElement("div");
    cardnome.className="divcard";
    let pnome = document.createElement("p"); 
    pnome.innerHTML = "Matricula do corretor: ";
    let pmatricula = document.createElement("p");
    pmatricula.innerHTML = item.matricula;
    pmatricula.className = "p";
    
    let cardvenda = document.createElement("div");
    cardvenda.className="divcard";
    let imovel = document.createElement("p");
    imovel.innerHTML = "Imovel";
    let botao = document.createElement("button");
    botao.innerHTML = "Venda";
    botao.className = "botao";
    
    let cardcod = document.createElement("div");
    cardcod.className="divcard";
    let codg = document.createElement("p");
    codg.innerHTML = "código do imóvel:";
    let prespcod = document.createElement("p");
    prespcod.innerHTML = cod;
    prespcod.className="p";

    let cardend = document.createElement("div");
    cardend.className="divcard";
    let end = document.createElement("p");
    end.innerHTML = "endereço do imovel:"
    let pend = document.createElement("P");
    pend.innerHTML = endereco;
    pend.className ="p";
    
    let cardvalor = document.createElement("div");
    cardvalor.className="divcard";
    let valor_resp = document.createElement("p");
    valor_resp.innerHTML = "valor do imovel:";
    let pvalor = document.createElement("p");
    pvalor.innerHTML = valor;
    pvalor.className="p";



    cardnome.appendChild(pnome);
    cardnome.appendChild(pmatricula);
    cardvenda.appendChild(imovel);
    cardvenda.appendChild(botao);
    cardcod.appendChild(codg);
    cardcod.appendChild(prespcod);
    cardend.appendChild(end);
    cardend.appendChild(pend);
    cardvalor.appendChild(valor_resp);
    cardvalor.appendChild(pvalor);
   

    card.appendChild(cardvenda);
    card.appendChild(cardnome);
    card.appendChild(cardcod);
    card.appendChild(cardend);
    card.appendChild(cardvalor);
    body.appendChild(card);

    let divcomissao = document.createElement("div");
    let comissao = document.createElement("p");
    comissao.innerHTML = "Comissão:"
    let pcomissao = document.createElement("p");
    
    divcomissao.appendChild(comissao);
    divcomissao.appendChild(pcomissao);
    body.appendChild(divcomissao);

    botao.addEventListener("click",()=>{
        let tot = 0;
        tot += Number(valor);
        totcomissao += tot;
        pcomissao.innerHTML = tot*0.05;

    })
    let totalcomissao = document.createElement("p");
    totalcomissao.innerHTML = totcomissao;

}


