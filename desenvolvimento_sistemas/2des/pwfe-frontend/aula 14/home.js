const section = document.querySelector("section");
const h1 = document.querySelector("#h1");
const dados = [];
const dados2 = JSON.parse(window.localStorage.getItem("dados"));
console.log(dados2);
dados2.forEach((element) => {
  h1.innerHTML = "Bem vindo " + element.nome + "!";

  let senha = document.createElement("div");
  //   console.log(element.senha);
  //   senha.innerHTML = element.senha / Number(element.senha.toString().length);
  //   senha.classList.add("h3");

  let div = document.createElement("div");
  div.classList.add("div_conteudo");

  let cpf = document.createElement("h3");
  cpf.innerHTML = "CPF: " + element.cpf;
  cpf.classList.add("h3");

  let nome = document.createElement("h3");
  nome.innerHTML = "Nome: " + element.nome;
  nome.classList.add("h3");

  let endereco = document.createElement("h3");
  endereco.innerHTML =
    "Cep:" +
    element.endereco.cep +
    " Nº: " +
    element.endereco.numero +
    " - Complemento:" +
    element.endereco.complemento;
  endereco.classList.add("h3");

  let nascimento = document.createElement("h3");
  nascimento.innerHTML = "Data de nascimento: " + element.nascimento;
  nascimento.classList.add("h3");
  //   div.appendChild(senha);
  div.appendChild(cpf);
  div.appendChild(nome);
  div.appendChild(endereco);
  div.appendChild(nascimento);
  section.appendChild(div);
});
