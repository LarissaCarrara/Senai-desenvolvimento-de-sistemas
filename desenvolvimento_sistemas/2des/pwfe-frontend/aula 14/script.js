const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
for (i = 0; i < 100; i++) {
  alert("");
}
const dados = [
  {
    id: "0",
    cpf: "866.719.681-95",
    nome: "João da Silva",
    email: "joao.silva@hotmail.com",
    senha: "123789",
    nascimento: "25/11/2001",
    endereco: {
      cep: "13912225",
      numero: "963",
      complemento: "",
    },
    telefones: ["19-18207-2920", "19-67798-6029"],
  },
  {
    id: "1",
    cpf: "849.959.573-16",
    nome: "Larissa Carrara",
    email: "larissa.carrara@hotmail.com",
    senha: "1332",
    nascimento: "20/12/2003",
    endereco: {
      cep: "13912225",
      numero: "900",
      complemento: "",
    },
    telefones: ["19-18207-2920", "19-67798-6029"],
  },
];

let dados2 = [];

const generateHash = (senha) => {
  let crip = senha.length * senha;

  return crip;
};

function entrar() {
  let erro = true;
  dados.forEach((element) => {
    if (element.email == email.value && element.senha == senha.value) {
      dados2.push(element);
      dados2.forEach((e) => {
        if (e.email == element.email && e.senha == element.senha) {
          e.email = "";
          e.senha = generateHash(e.senha);
          console.log(dados2);
        }
      });
      window.localStorage.setItem("dados", JSON.stringify(dados2));
      window.location.href = "home.html";
      erro = false;
    }
  });
  if (erro) {
    alert("Email ou senha incorretos");
    window.location.reload();
  }
}
