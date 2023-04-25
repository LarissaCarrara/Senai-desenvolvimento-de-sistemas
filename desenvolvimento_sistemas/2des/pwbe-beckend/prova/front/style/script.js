let produto = document.querySelector("#produto");
let data = document.querySelector("#data");
let quantidade = document.querySelector("#quantidade");
let vendedorid = document.querySelector("#vendedorid");
const selectProdutos = document.querySelector("#selectProdutos");
const selectVendedor = document.querySelector("#selectVendedor");
let id;
function PaginaVenda(){
    window.location.href = `./venda.html`;

}

function PaginaFuncionarios(){
    window.location.href = `./funcionario.html`;

}

function Cadastrar(){

    const dados = {
        "data": data.value,
        "quantidade": quantidade.value,
        "produtoid": selectProdutos.value,
        "vendedorid": selectVendedor.value
    }
    console.log(dados);

    fetch('http://localhost:3000/NovaVenda', 
    {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(dados)
    }) .then(resp => {
            return resp.status;
        })
        .then(data => {
            if (data == 201) {
                console.log(data);
               alert("venda cadastrada");
            }
        })

}

function CarregarProdutos(){
    fetch("http://localhost:3000/listarProduto")
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        if (data != undefined) {
            data.forEach(element => {
                console.log(element);
                let option = document.createElement("option");
                option.innerHTML = element.nome;
                option.value = element.id;

                selectProdutos.appendChild(option);
            });
        }
    })
}

function CarregarVendedor(){
    fetch("http://localhost:3000/listar")
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        if (data != undefined) {
            data.forEach(element => {
                console.log(element);
                let option = document.createElement("option");
                option.innerHTML = element.nome;
                option.value = element.id;
                
                
                selectVendedor.appendChild(option);
            });
        }
    })
}
