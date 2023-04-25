//criar uma classe paciente cm o metodo construtor
class Compra{
    id;
    data;
    produto;
    cliente;
    totalParcelas;
    preco;
    quantidade;
    total;
    constructor(id,data, produto, cliente, totalParcelas, preco,quantidade, total){
        this.id = id;
        this.data = data;
        this.produto = produto;
        this.cliente = cliente;
        this.totalParcelas = totalParcelas;
        this.preco = preco;
        this.quantidade = quantidade;
        this.total = this.getTotal();
    }

    getTotal(){
        let total = this.preco * this.quantidade;
        return total;
    }
}

class Parcela{
    id;
    compra;
    dataVencimento;
    dataPagamento;
    valorParcela;
    juros;
    constructor(id, compra, dataVencimento, dataPagamento){
        this.id = id;
        this.compra = compra;
        this.dataVencimento = new Date (dataVencimento);
        this.dataPagamento = new Date (dataPagamento);
        this.valorParcela = this.getValorParcela();
        this.juros = this.getJuros();
    }

    getValorParcela(){
       let total = this.compra.total / this.compra.totalParcelas;
        return total
    }

    getDiasAtraso(){
        if(this.dataPagamento > this.dataVencimento){
            return (this.dataDevolucao - this.dataRetirada) / (1000 * 60 * 60 * 24)
        }else{
            return 0;
        }
    }

    getJuros(){
        return (0.01 * this.getDiasAtraso() * this.getValorParcela())
    }
}


//construir o objeto paciente1 utilizando a classe Paciente com o construtor
const compras = [
    new Compra(1, '25/03/2022', 'TV LCD 4K 50" LG', 'Jair Santana', 4, 2800, 2),
    new Compra(2, '12/05/2022', 'TV LCD 4K 50" Sansung', 'Jurema Santana', 2, 3100, 1),
    new Compra(3, '	08/06/2022', 'TV LCD 4K 50" LG', 'Mariana Silva', 3, 2850, 2),
    new Compra(4, '17/02/2023', 'TV LCD 4K 50" Sansung', 'Marta Oliveira', 5, 2899.90, 1) 
   
]

const parcelas = [
    new Parcela(1, compras[0], '25/04/2022', '23/04/2022'),
    new Parcela(1, compras[0], '25/05/2022', '24/05/2022'),
    new Parcela(3, compras[0], '25/06/2022', '27/06/2022'),
    new Parcela(4, compras[0], '25/07/2022', '30/07/2022'),
    new Parcela(5, compras[1], '12/06/2022', '12/06/2022'),
    new Parcela(5, compras[1], '12/07/2022', '15/07/2022'),
    new Parcela(5, compras[2], '08/07/2022', '18/07/2022'),
    new Parcela(5, compras[2], '08/08/2022', '08/08/2022'),
    new Parcela(5, compras[2], '08/09/2022', '06/09/2022'),
    new Parcela(5, compras[3], '17/03/2023', '20/03/2023'),
    new Parcela(5, compras[3], '17/04/2023', '22/04/2023'),
    new Parcela(5, compras[3], '17/05/2023', null),
    new Parcela(5, compras[3], '17/06/2023', null),
    new Parcela(5, compras[3], '17/07/2023', null)
]
