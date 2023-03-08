
const formatNumber = (Number) =>{
    return new Intl.NumberFormat("pt-BR", {
     style:"currency",
     currency:"BRL",
    }).format(Number);
 } 
 

var dados = [
    {
        "funcionario":"Vitoria da Cruz",
        "matricula":"010203",
        "setor":"Eletronico",
        "comissao":5,
        "vendas":[
            {
                "data":"03/02/2023",
                "valor":1250.00
            },
            {
                "data":"03/02/2023",
                "valor":899.00
            },
            {
                "data":"04/02/2023",
                "valor":5999.90
            }
        ]
    },
    {
        "funcionario":"Cecilia Martins",
        "matricula":"124578",
        "setor":"Eletronico",
        "comissao":5,
        "vendas":[
            {
                "data":"15/01/2023",
                "valor":3290.90
            },
            {
                "data":"16/01/2023",
                "valor":1320.99
            },
            {
                "data":"16/02/2023",
                "valor":990.90
            }
        ]
    },
    {
        "funcionario":"Joaquim Souza",
        "matricula":"124578",
        "setor":"Moveis",
        "comissao":12,
        "vendas":[
            {
                "data":"08/01/2023",
                "valor":4500.00
            },
            {
                "data":"08/01/2023",
                "valor":599.99
            },
            {
                "data":"09/01/2023",
                "valor":259.90
            }
        ]
    }
]
var tabela = document.querySelector("#tabela");


var func = document.querySelector("#input_func");
var venda_nova = document.querySelector("#input_vendas");
var data_nova = document.querySelector("#input_data");



function add_dados_jason(){
    
    const novos_dados = {
        "data": data_nova.innerHTML,
        "valor": venda_nova.innerHTML
    }
    dados[0].vendas.push(novos_dados);
    
    add_tabela();
}


function add_tabela(){
    const tbody = document.querySelector("tbody");
    tbody.innerHTML="estou aqui";
    for(let i=0; i<dados.length; i++){
        let total=0;
        let armazena = dados[i];
    
        for(let j=0; j<dados[i].vendas.length; j++){
             total+= dados[i].vendas[j].valor;
    
        }
    
        let tr1= document.createElement("tr");
    
        let td1 = document.createElement("td");
        td1.innerHTML = armazena.funcionario;
        let td2 = document.createElement("td"); 
        td2.innerHTML = armazena.matricula;
        let td3 = document.createElement("td");
        td3.innerHTML = armazena.setor; 
        let td4 = document.createElement("td");
        td4.innerHTML = formatNumber(total); 
    
    
    
            let comissao = total * (armazena.comissao/100);
            
            
        let td5 = document.createElement("td");
        td5.innerHTML = formatNumber(comissao); 
    
      
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);
    
         
        tbody.appendChild(tr1);
    }
}


add_tabela();





