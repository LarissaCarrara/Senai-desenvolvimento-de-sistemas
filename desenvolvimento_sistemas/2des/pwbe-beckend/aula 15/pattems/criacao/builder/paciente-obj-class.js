//CRIAR UM OBJETO JAVASCROPT DIRETAMENTE

//objeto
const objeto = {}
//atributos
objeto.nome = "Márcia"
objeto.idade = 19
objeto.peso = 66.5
objeto.altura = 1.58

//métodos
objeto.imc = ()=>{
    return objeto.peso/ (objeto.altura*objeto.altura)
}
//incorporando o resultado do metodo a um atributo
objeto.imc = objeto.imc()

//console.log(objeto)

//CRIAR UM OBJETO JAVASCRIPT A PARTIR DE UMA CLASSE

class Paciente{
    //atributos
    nome;
    idade;
    peso;
    altura;
    imc = this.getimc();

    //método
    getimc(){
        return Number((this.peso/ (this.altura*this.altura)).toFixed(2))
    }
}
//instânciar a classe paciente em um objeto
const paciente1 = new Paciente();
//adicionando valores na classe
paciente1.nome= 'Alfredo'
paciente1.idade= 25
paciente1.peso= 88
paciente1.altura= 1.92
paciente1.imc= paciente1.getimc()

//mostrar paciente1
console.log(paciente1)
console.log(paciente1.getimc())