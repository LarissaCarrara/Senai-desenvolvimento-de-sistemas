const {id, nome} = JSON.parse(localStorage.getItem("usuario"));
const body = document.querySelector("body");

const saudacao = document.querySelector("#saudacao");
saudacao.innerHTML += nome;

const base= [
    {
        "id":4,
        "tarefas":[
            {
                "data":"16/12/2023",
                "descricao": "ir na igreja",
                "status": 1
            },
            {
                "data":"29/05/2023",
                "descricao":"Ir ao dentista",
                "status":0
            },
            {
                "data":"03/09/2023",
                "descricao":"Entregar trabalho do UL",
                "status": 0
            }
        ]
    },


    {
        "id":5,
        "tarefas":[
            {
                "data":"16/01/2023",
                "descricao": "ir na igreja",
                "status": 1
            },
            {
                "data":"29/04/2023",
                "descricao":"Ir ao dentista",
                "status":0
            },
            {
                "data":"03/08/2023",
                "descricao":"Entregar trabalho do UL",
                "status": 0
            }
        ]
    },


    {
        "id":6,
        "tarefas":[
            {
                "data":"19/01/2023",
                "descricao": "ir na igreja",
                "status": 1
            },
            {
                "data":"29/02/2023",
                "descricao":"Ir ao dentista",
                "status":0
            },
            {
                "data":"03/03/2023",
                "descricao":"Entregar trabalho do UL",
                "status": 0
            }
        ]
    }
]

const data = base.find(item =>{
    return item.id == id;
})
if (data!=undefined){
    data.tarefas.forEach((tarefa)=>{
       criarTarefa(tarefa.data, tarefa.descricao, tarefa.status);
    });
}


function criarTarefa(data, descricao, status){
    let card = document.createElement("div");
    let pdata = document.createElement("p");
    let pdescricao = document.createElement("p");

    pdata.innerHTML = data;
    pdescricao.innerHTML = descricao;

    if(status == 1){
        card.style.backgroundColor = "green";
    }

    card.appendChild(pdata);
    card.appendChild(pdescricao);
    body.appendChild(card);
}