var info = [
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
        "matricula":"1234567",
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
        "matricula":"1234578",
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

var matricula = document.querySelectorAll('.matricula')
var nome = document.querySelectorAll('.nome')
var setor = document.querySelectorAll('.setor')
var total = document.querySelectorAll('.total')
var comissao = document.querySelectorAll('.comissao')

var vendaAtual = 0
var comissaoAtual = 10

for(let i = 0; i < info.length; i++) {
    matricula[i].innerHTML = info[i].matricula
    nome[i].innerHTML = info[i].funcionario
    setor[i].innerHTML = info[i].setor

    for(let j = 0; j < info[i].vendas.length; j++) {
        vendaAtual += info[i].vendas[j].valor
        comissaoAtual = info[i].comissao / 100
        comissaoAtual *= vendaAtual
    }

    total[i].innerHTML ="R$ " + vendaAtual.toFixed(2)
    comissao[i].innerHTML ="R$ " + comissaoAtual.toFixed(2)
    vendaAtual = 0
}

// Formulario
function procurar() {
    var search = document.querySelector('#search').value
    var result = document.querySelector('#result')
    var divVenda = document.querySelector('#venda')
    for(let i = 0; i < info.length; i++) {
        if(search == info[i].matricula || search == info[i].funcionario){
            result.innerHTML = `Matricula: ${info[i].matricula}<br>`
            result.innerHTML += `Nome: ${info[i].funcionario}<br>`
            result.innerHTML += `Setor: ${info[i].setor}<br>`
            divVenda.style.display = 'block'
            var selecionado = i
            
            break
        } else {
            result.innerHTML = "Funcionario não encontrado"
            divVenda.style.display = 'none'
        }
        var data = document.querySelector('#data').value
        var valor = document.querySelector('#valor').value
        
    }
} 
const searchInput = document.querySelector('#search')
searchInput.addEventListener('keyup', procurar())