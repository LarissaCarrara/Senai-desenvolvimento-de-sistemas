const section = document.querySelector("section");

const dados = []

const dados2 = window.localStorage.getItem("dados", (dados));
console.log(dados2);

dados2.forEach((element) => {
    let div = document.createElement("div");
    let cpf = document.createElement("h3");
    cpf.innerHTML = element.cpf;

    let nome = document.createElement("h3");
    nome.innerHTML = element.nome;

    let endereco = document.createElement("h3");
    endereco.innerHTML = element.endereco.cep + " - " + element.endereco.numero + " - " + element.endereco.complemento;

    let nascimento = document.createElement("h3");
    nascimento.innerHTML = element.nascimento;

    div.appendChild(cpf);
    div.appendChild(nome);
    div.appendChild(endereco);
    div.appendChild(nascimento);
    section.appendChild(div);
});