//criar uma classe paciente cm o metodo construtor
class Paciente{
    nome;
    idade;
    peso;
    altura;
    imc;
    constructor(nome, peso, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;9
        this.altura = altura;
        this.imc = Number((peso/altura ** 2).toFixed(2))
    }
}

//construir o objeto paciente1 utilizando a classe Paciente com o construtor
const paciente1 = new Paciente('jorgina',74,48,1.59)

console.log(paciente1)