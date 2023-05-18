// define a interface para todos os componentees da árvore
class Componente {
    constructor(obj) {
        this.obj = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
    print() { }
}

// representa os objetos folha na árvore
class Folha extends Componente {
    constructor(obj) {
        super(obj);
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
    }
}

// representa os objetos compostos na árvore
class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.filhos = [];
    }
    add(componente) {
        this.filhos.push(componente);
    }
    remove(componente) {
        raiz
        const index = this.filhos.indexOf(componente);
        this.filhos.splice(index, 1);
    }
    getfilho(index) {
        return this.filhos[index];
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
        this.filhos.forEach(filho => {
            filho.print();
        });
    }
}

function getTotal(preco, quantidade) {
    return preco * quantidade;
}

const compra = [
    {
        id: 1,
        data: '2022-03-25',
        produto: 'TV LCD 4K 50" LG',
        cliente: 'Jair Santana',
        totalParcelas: 4,
        preco: 2800.00,
        quantidade: 2,
        total:getTotal(2800.00, 2) ,
        parcelas: (getTotal()/4)
    },
    {
        id: 2,
        data: 'PBC-2022-05-12',
        produto: 'TV LCD 4K 50" Sansung',
        cliente: 'Jurema Santana',
        totalParcelas: 2,
        preco: 3100.00,
        quantidade: 1,
        total:getTotal(3100.00, 1) ,
        parcelas:  (getTotal()/2)
    },
    {
        id: 3,
        data: '2022-06-08',
        produto: 'TV LCD 4K 50" LG',
        cliente: '	Mariana Silva',
        totalParcelas: 3,
        preco: 2850.00,
        quantidade: 2,
        total:getTotal(2850.00, 2) ,
        parcelas: (getTotal()/3)
    },
    {
        id: 4,
        data: '2022-02-17',
        produto: 'TV LCD 4K 50" Sansung',
        cliente: 'Marta Oliveira',
        totalParcelas: 5,
        preco: 2899.90,
        quantidade: 1,
        total:getTotal(2899.90, 1) ,
        parcelas: (getTotal()/5)
    }
];

class Parcela {
    constructor(id, compra, dataVencimento, dataPagamento) {
        this.id = id
        this.compra = compra
        this.dataVencimento = new Date(dataVencimento)
        this.dataPagamento = dataPagamento != undefined ? new Date(dataPagamento) : undefined
        this.valorParcela = this.getValorParcela()
        this.Juros = this.getJuros()
    }
    getValorParcela() {
        return this.compra.totalParcelas > 0 ? this.compra.total / this.compra.totalParcelas : this.compra.total
    }
    getDiasAtraso() {
        if (this.dataPagamento == undefined || this.dataPagamento == null)
            return 0
        else
            if (this.dataPagamento > this.dataVencimento) {
                const diferencaEmMilissegundos = this.dataPagamento - this.dataVencimento
                const umDiaEmMilissegundos = 1000 * 60 * 60 * 24
                return Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos)
            }
            else return 0
    }
    getJuros() {
        return this.valorParcela * 0.01 * this.getDiasAtraso()
    }
}
// const parcela = [
//     {
//         id: 1,
//         compra: 1,
//         dataVencimento: "2022-04-25",
//         dataPagamento: '2022-04-23',
//         valorParcela: getTotal()/4,
//         juros: getJuros()
//     },
//     {
//         id: 2,
//         compra: 1,
//         dataVencimento: "2022-05-25",
//         dataPagamento: '2022-05-24',
//         valorParcela: getTotal()/4,
//         juros: getJuros()
//     },
//     {
//         id: 3,
//         compra: 1,
//         dataVencimento: "2022-06-25",
//         dataPagamento: '2022-06-27',
//         valorParcela: getTotal()/4,
//         juros: getJuros()
//     },
//     {
//         id: 4,
//         compra: 1,
//         dataVencimento: "2022-07-25",
//         dataPagamento: '2022-07-30',
//         valorParcela: getTotal()/4,
//         juros: getJuros()
//     },
//     {
//         id: 5,
//         compra: 2,
//         dataVencimento: "2022-06-12",
//         dataPagamento: '2022-06-12',
//         valorParcela: getTotal()/2,
//         juros: getJuros()
//     },
//     {
//         id: 6,
//         compra: 2,
//         dataVencimento: "2022-07-12",
//         dataPagamento: '2022-07-15',
//         valorParcela: getTotal()/2,
//         juros: getJuros()
//     },
//     {
//         id: 7,
//         compra: 3,
//         dataVencimento: "2022-07-08",
//         dataPagamento: '2022-07-18',
//         valorParcela: getTotal()/3,
//         juros: getJuros()
//     },
//     {
//         id: 8,
//         compra: 3,
//         dataVencimento: "2022-08-08",
//         dataPagamento: '2022-08-08',
//         valorParcela: getTotal()/3,
//         juros: getJuros()
//     },
//     {
//         id: 9,
//         compra: 3,
//         dataVencimento: "2022-09-08",
//         dataPagamento: '2022-09-06',
//         valorParcela: getTotal()/3,
//         juros: getJuros()
//     },
//     {
//         id: 10,
//         compra: 4,
//         dataVencimento: "2023-03-17",
//         dataPagamento: '2023-07-20',
//         valorParcela: getTotal()/5,
//         juros: getJuros()
//     },
//     {
//         id: 11,
//         compra: 4,
//         dataVencimento: "2023-04-17",
//         dataPagamento: '2023-04-22',
//         valorParcela: getTotal()/5,
//         juros: getJuros()
//     },
//     {
//         id: 12,
//         compra: 4,
//         dataVencimento: "2023-05-17",
//         dataPagamento: '',
//         valorParcela: getTotal()/5,
//         juros: getJuros()
//     },
//     {
//         id: 13,
//         compra: 4,
//         dataVencimento: "2023-06-17",
//         dataPagamento: '',
//         valorParcela: getTotal()/5,
//         juros: getJuros()
//     },
//     {
//         id: 14,
//         compra: 4,
//         dataVencimento: "2023-07-17",
//         dataPagamento: '',
//         valorParcela: getTotal()/5,
//         juros: getJuros()
//     },
// ];

const parcela = [
    new Parcela(1, compra[0], '2022-04-25', '2022-04-23'),
    new Parcela(2, compra[0], '2022-05-25', '2022-05-24'),
    new Parcela(3, compra[0], '2022-06-25', '2022-06-27'),
    new Parcela(4, compra[0], '2022-07-25', '2022-07-30'),
    new Parcela(5, compra[1], '2022-06-12', '2022-06-12'),
    new Parcela(6, compra[1], '2022-07-12', '2022-07-15'),
    new Parcela(7, compra[2], '2022-07-08', '2022-07-18'),
    new Parcela(8, compra[2], '2022-08-08', '2022-08-08'),
    new Parcela(9, compra[2], '2022-09-08', '2022-09-06'),
    new Parcela(10, compra[3], '2023-03-17', '2023-03-200'),
    new Parcela(11, compra[3], '2023-04-17', '2023-04-220'),
    new Parcela(12, compra[3], '2023-05-17', null),
    new Parcela(13, compra[3], '2023-06-17', null),
    new Parcela(14, compra[3], '2023-07-17', null)
]

    
    const compra1 = new Composite(compra[0]);
    compra1.add(new Folha(parcela[0]));
    compra1.add(new Folha(parcela[1]));
    compra1.add(new Folha(parcela[2]));
    compra1.add(new Folha(parcela[3]));
   
    const compra2 = new Composite(compra[1]);
    compra2.add(new Folha(parcela[4]));
    compra2.add(new Folha(parcela[5]));
   
    const compra3 = new Composite(compra[2]);
    compra3.add(new Folha(parcela[6]));
    compra3.add(new Folha(parcela[7]));
    compra3.add(new Folha(parcela[8]));

    const compra4 = new Composite(compra[3]);
    compra4.add(new Folha(parcela[9]));
    compra4.add(new Folha(parcela[10]));
    compra4.add(new Folha(parcela[11]));
    compra4.add(new Folha(parcela[12]));
    compra4.add(new Folha(parcela[13]));
    
    
    compra1.print();
    console.log("-------");
    compra2.print();
    console.log("-------");
    compra3.print();
    console.log("-------");
    compra4.print();
