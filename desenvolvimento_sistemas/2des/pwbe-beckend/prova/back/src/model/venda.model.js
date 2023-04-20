
class Venda{
    
    constructor(i){
        this.id = i.id,
        this.data = i.data,
        this.quantidade = i.quantidade,
        this.valor = i.valor
    }

    VendaTotal(){
        let total = this.valor * this.quantidade;
        return total;
    }

    Comissao(){
        let comissao = ( this.VendaTotal()* 0.05).toFixed(2);
        return comissao;

    }
   
}

module.exports = Venda
