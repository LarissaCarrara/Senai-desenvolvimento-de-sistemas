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

function calcularIdade(ano) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    return anoAtual - ano;
}

const veiculo = [
    {
        id: 1,
        placa: 'JHK-2518',
        modelo: 'Uno',
        marca: 'Fiat',
        ano: 2015,
        idade: calcularIdade(2015),
        diaria: 75.9
    },
    {
        id: 2,
        placa: 'PBC-5A58',
        modelo: 'Gol',
        marca: 'VW',
        ano: 2018,
        idade: calcularIdade(2018),
        diaria: 99.9
    },
    {
        id: 3,
        placa: 'CCB-2F19',
        modelo: 'Celta',
        marca: 'Chevrolet',
        ano: 2007,
        idade: calcularIdade(2007),
        diaria: 49.9
    }
];

const aluguel = [
    {
        id: 1,
        veiculo: 'JHK-2518',
        dataRetirada: "2023-04-01",
        dataDevolucao: '2023-04-06',
        valorAluguel: getAluguel("2023-04-01", "2023-04-06", veiculo[0].diaria)
    },
    {
        id: 2,
        veiculo: 'PBC-5A58',
        dataRetirada: "2023-04-01",
        dataDevolucao: '2023-04-08',
        valorAluguel: getAluguel("2023-04-01", "2023-04-08", veiculo[1].diaria)
    },
    {
        id: 3,
        veiculo: 'PBC-5A58',
        dataRetirada: "2023-04-02",
        dataDevolucao: '2023-04-07',
        valorAluguel: getAluguel("2023-04-02", "2023-04-07", veiculo[1].diaria)
    },
    {
        id: 4,
        veiculo: 'CCB-2F19',
        dataRetirada: "2023-04-07",
        dataDevolucao: '2023-04-16',
        valorAluguel: getAluguel("2023-04-07", "2023-04-16", veiculo[2].diaria)
    },
    {
        id: 5,
        veiculo: 'JHK-2518',
        dataRetirada: "2023-04-08",
        dataDevolucao: '2023-04-16',
        valorAluguel: getAluguel("2023-04-08", "2023-04-16", veiculo[0].diaria)
    }
];

function getAluguel(dataRetirada, dataDevolucao, diaria) {
    const dataRetiradaObj = new Date(dataRetirada);
    const dataDevolucaoObj = new Date(dataDevolucao);
    const diffTime = Math.abs(dataDevolucaoObj - dataRetiradaObj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Calcula a diferença em dias

    return diffDays * diaria;
}

    
    const veiculo1 = new Composite(veiculo[0]);
    veiculo1.add(new Folha(aluguel[0]));
    veiculo1.add(new Folha(aluguel[4]));
   
    const veiculo2 = new Composite(veiculo[1]);
    veiculo2.add(new Folha(aluguel[1]));
    veiculo2.add(new Folha(aluguel[2]));
   
    const veiculo3 = new Composite(veiculo[2]);
    veiculo3.add(new Folha(aluguel[3]));
   
    
    
    veiculo1.print();
    console.log("-------");
    veiculo2.print();
    console.log("-------");
    veiculo3.print();
