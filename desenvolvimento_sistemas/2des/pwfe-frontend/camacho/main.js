const data = [
    {
        "id": 1,
        "funcionario": "Vitoria da Cruz",
        "matricula": "010203",
        "setor": "Eletronico",
        "comissao": 5,
        "vendas": [
            {
                "data": "03/02/2023",
                "valor": 1250.00
            },
            {
                "data": "03/02/2023",
                "valor": 899.00
            },
            {
                "data": "04/02/2023",
                "valor": 5999.90
            }
        ]
    },
    {
        "id": 2,
        "funcionario": "Cecilia Martins",
        "matricula": "124578",
        "setor": "Eletronico",
        "comissao": 5,
        "vendas": [
            {
                "data": "15/01/2023",
                "valor": 3290.90
            },
            {
                "data": "16/01/2023",
                "valor": 1320.99
            },
            {
                "data": "16/02/2023",
                "valor": 990.90
            }
        ]
    },
    {
        "id": 3,
        "funcionario": "Joaquim Souza",
        "matricula": "124578",
        "setor": "Moveis",
        "comissao": 12,
        "vendas": [
            {
                "data": "08/01/2023",
                "valor": 4500.00
            },
            {
                "data": "08/01/2023",
                "valor": 599.99
            },
            {
                "data": "09/01/2023",
                "valor": 259.90
            }
        ]
    }
]

const FormatBRL = (valor) => {
    return Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL',
        }).format(valor)
}


const tbody = document.querySelector('tbody')
const addData = () => {
    tbody.innerHTML = ""
    data.forEach((item) => {
        const tr = document.createElement('tr')
        const tdFuncionario = document.createElement('td')
        const tdMatricula = document.createElement('td')
        const tdSetor = document.createElement('td')
        const tdVendas = document.createElement('td')
        const tdComissao = document.createElement('td')
        const remove = document.createElement('td')

        const totalVendas = item.vendas.reduce((total, venda) => {
            return total + Number(venda.valor)
        }, 0)

        tdFuncionario.textContent = item.funcionario
        tdMatricula.textContent = item.matricula
        tdSetor.textContent = item.setor
        tdVendas.textContent = String(FormatBRL(totalVendas))
        tdComissao.textContent = String(FormatBRL(totalVendas / 100 * item.comissao))
        remove.textContent = "X"
        remove.setAttribute('onclick', 'removeData(' + item.id + ')')

        tr.appendChild(tdFuncionario)
        tr.appendChild(tdMatricula)
        tr.appendChild(tdSetor)
        tr.appendChild(tdVendas)
        tr.appendChild(tdComissao)
        tr.appendChild(remove)

        tbody.appendChild(tr)

    })
}
addData()

const removeData = (id) => {
    const index = data.findIndex((item) => {
        return item.id === id
    })
    data.splice(index, 1)
    addData()
}

var jatem = false
const addVendas = () => {
    if (jatem) return
    const body = document.querySelector('body')
    const form = document.createElement('form')
    const select = document.createElement('select')
    const pDate = document.createElement('p')
    const inputValor = document.createElement('input')
    const buttonSubmit = document.createElement('button')
    const labelValor = document.createElement('label')
    const labelData = document.createElement('label')
    buttonSubmit.innerHTML = "Enviar"
    buttonSubmit.setAttribute('type', 'submit')
    const date = new Date()
    labelData.innerHTML = "Data"
    labelValor.innerHTML = "Valor"
    data.forEach((item) => {
        const option = document.createElement('option')
        option.innerHTML = item.id + " - " + item.funcionario
        select.appendChild(option)
    })
    var selected = null
    var selectedIndex = 0
    select.addEventListener('change', (e) => {
        selectedIndex = e.target.options.selectedIndex
    })
    pDate.innerHTML = date.toLocaleDateString('pt-BR')
    form.appendChild(select)
    form.appendChild(pDate)
    form.appendChild(inputValor)
    form.appendChild(buttonSubmit)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        tbody.innerHTML = ""
        const valor = inputValor.value
        const date = pDate.innerHTML
        const vendas = data[selectedIndex].vendas
        vendas.push({
            data: date,
            valor: valor
        })

        addData()
    })
    jatem = true

    body.appendChild(form)
}
const searchBtn = document.querySelector('#search')
searchBtn.addEventListener('keyup', () => {
    const trs = document.querySelectorAll('tr')
    trs.forEach((tr, i) => {
        if (i === 0) return
        const td = tr.querySelectorAll('td')[0]
        if (td.innerText.toLowerCase().includes(searchBtn.value)) {
            tr.style.display = 'table-row'
        } else {
            tr.style.display = 'none'
        }
    })
})

const openForm = () => {
    const modal = document.createElement('div')
    modal.setAttribute('id', 'modal')
    const modalContent = document.createElement('div')
    modalContent.setAttribute('id', 'modal-content')
    const tableForm = document.createElement('table')
    tableForm.setAttribute('id', 'table-form')

    const trNome = document.createElement('tr')
    const tdLabelNome = document.createElement('td')
    tdLabelNome.innerHTML = "Nome"
    const tdInputNome = document.createElement('td')
    const inputNome = document.createElement('input')
    inputNome.setAttribute('type', 'text')
    inputNome.setAttribute('id', 'nome')
    tdInputNome.appendChild(inputNome)
    trNome.appendChild(tdLabelNome)
    trNome.appendChild(tdInputNome)

    const trMatricula = document.createElement('tr')
    const tdLabelMatricula = document.createElement('td')
    tdLabelMatricula.innerHTML = "Matricula"
    const tdInputMatricula = document.createElement('td')
    const inputMatricula = document.createElement('input')
    inputMatricula.setAttribute('type', 'text')
    inputMatricula.setAttribute('id', 'matricula')
    tdInputMatricula.appendChild(inputMatricula)
    trMatricula.appendChild(tdLabelMatricula)
    trMatricula.appendChild(tdInputMatricula)

    const trSetor = document.createElement('tr')
    const tdLabelSetor = document.createElement('td')
    tdLabelSetor.innerHTML = "Setor"
    const tdInputSetor = document.createElement('td')
    const inputSetor = document.createElement('input')
    inputSetor.setAttribute('type', 'text')
    inputSetor.setAttribute('id', 'setor')
    tdInputSetor.appendChild(inputSetor)
    trSetor.appendChild(tdLabelSetor)
    trSetor.appendChild(tdInputSetor)

    const trVendas = document.createElement('tr')
    const tdLabelVendas = document.createElement('td')
    tdLabelVendas.innerHTML = "Vendas"
    const tdInputVendas = document.createElement('td')
    const inputVendas = document.createElement('input')
    inputVendas.setAttribute('type', 'text')
    inputVendas.setAttribute('id', 'vendas')
    tdInputVendas.appendChild(inputVendas)
    trVendas.appendChild(tdLabelVendas)
    trVendas.appendChild(tdInputVendas)

    const trComissao = document.createElement('tr')

    const tdLabelComissao = document.createElement('td')
    tdLabelComissao.innerHTML = "Comissão"
    const tdInputComissao = document.createElement('td')
    const inputComissao = document.createElement('input')
    inputComissao.setAttribute('type', 'text')
    inputComissao.setAttribute('id', 'comissao')
    tdInputComissao.appendChild(inputComissao)
    trComissao.appendChild(tdLabelComissao)
    trComissao.appendChild(tdInputComissao)

    tableForm.appendChild(trNome)
    tableForm.appendChild(trMatricula)
    tableForm.appendChild(trSetor)
    tableForm.appendChild(trVendas)
    tableForm.appendChild(trComissao)

    modalContent.appendChild(tableForm)
    modal.appendChild(modalContent)
    document.body.appendChild(modal)

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.remove()
        }
    })

    const buttonSubmit = document.createElement('button')
    buttonSubmit.setAttribute('id', 'button-submit')
    buttonSubmit.innerHTML = "Enviar"
    buttonSubmit.setAttribute('onclick', 'AddFuncionario()')
    modalContent.appendChild(buttonSubmit)
}

const AddFuncionario = () => {
    const nome = document.querySelector('#nome').value
    const matricula = document.querySelector('#matricula').value
    const setor = document.querySelector('#setor').value
    const vendas = document.querySelector('#vendas').value
    const comissao = document.querySelector('#comissao').value
    pushData()
    document.querySelector('#modal').remove()
    addData()
}

const pushData = (
id = 6,
func = 'lucas', 
matricula = 123, setor = 'TI', 
vendas = [{ "valor": 1000 }], 
comissao = 10
) => {
    data.push({
        id: id,
        funcionario: func,
        matricula: matricula,
        setor: setor,
        vendas: vendas,
        comissao: comissao
    })
}