
class funcionario{
    
    constructor(i){
        this.matricula = i.matricula,
        this.nome_completo = i.nome_completo,
        this.admissao = i.admissao,
        this.salario= i.salario,
        this.dataPagto= i.dataPagto,
        this.desempenho = i.desempenho
        
    }

    bonificacao(){
        let DataAtual= new Date();
        let AnoAtual = DataAtual.getFullYear(); //pega o ano atual
        let anoAdmissao = new Date(this.admissao).getFullYear();
        let tempo = AnoAtual - anoAdmissao;
        let bonificacaoFuncionario = tempo * this.desempenho * (this.salario * 0.02);

        return bonificacaoFuncionario;
    }

    

}

module.exports = funcionario
