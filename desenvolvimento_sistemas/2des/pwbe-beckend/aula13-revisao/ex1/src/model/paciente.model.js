
class Paciente{
    imc;
    constructor(i){
        this.id = i.id,
        this.nome_completo = i.nome_completo,
        this.nascimento = i.nascimento,
        this.peso = i.peso,
        this.altura = i.altura
    }

    CalcIdade(){
        let DataAtual= new Date();
        let AnoAtual = DataAtual.getFullYear(); //pega o ano atual
        let AnoNascimento = new Date(this.nascimento).getFullYear();
        let idade = AnoAtual - AnoNascimento;
        return idade;
    }

    CalcImc(){
        let imc = (this.peso/(this.altura*this.altura)).toFixed(2);
        this.imc = imc;
        return imc;

    }
    Diagnostico(){
        let diagnostico;

        if(this.imc < 18.5){
            diagnostico = "Magreza";
            return diagnostico;
        }else if(this.imc >=18.5 & this.imc <=24.9){
            diagnostico = "Normal";
            return diagnostico;
        }else if(this.imc >=25 & this.imc <=29.9){
            diagnostico = "Sobrepeso";
            return diagnostico;
        }else if(this.imc >=30 & this.imc <=34.9){
            diagnostico = "Obesidade grau 1";
            return diagnostico;
        }else if(this.imc >=35 & this.imc <=39.9){
            diagnostico = "Obesidade grau 2";
            return diagnostico;
        }else{
            diagnostico = "Obesidade grau 3";
            return diagnostico;
        }
    }

}

module.exports = Paciente
