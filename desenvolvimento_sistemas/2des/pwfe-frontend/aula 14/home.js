const section = document.querySelector("section");
const h1 = document.querySelector("#h1");
const id = JSON.parse(window.localStorage.getItem("id"));

const buscarUsuario = async () => {
  const response = await fetch("http://localhost:3000/buscar/" + id);
  const dados = await response.json();

  dados.forEach((element) => {
    h1.innerHTML = "Bem vindo " + element.nome + "!";

    const div = document.createElement("form");
    div.classList.add("div_conteudo");
    div.setAttribute("id", "form1");
    section.innerHTML = "";

    const email = document.createElement("input");
    email.disabled = true;
    email.required = true;
    email.value = element.email;
    email.classList.add("h3");

    const edit = document.createElement("button");
    edit.innerHTML = "Editar";
    edit.classList.add("editBtn");

    edit.addEventListener("click", async (e) => {
      e.preventDefault();
      const inputs = document.querySelectorAll("input");

      inputs.forEach((el) => {
        el.disabled = false;
      });
      email.required = true;
    });

    const cpf = document.createElement("input");
    cpf.disabled = true;
    cpf.required = true;
    cpf.value = element.cpf;
    cpf.classList.add("h3");

    const nome = document.createElement("input");
    nome.disabled = true;
    nome.required = true;
    nome.value = element.nome;
    nome.classList.add("h3");

    const labelEmail = document.createElement("label");
    labelEmail.innerHTML = "EMAIL:";
    labelEmail.style.marginTop = "10px";

    const labelCpf = document.createElement("label");
    labelCpf.innerHTML = "CPF:";

    const labelSenha = document.createElement("label");
    labelSenha.innerHTML = "SENHA:";

    const labelNasc = document.createElement("label");
    labelNasc.innerHTML = "NASCIMENTO:";

    const labelNome = document.createElement("label");
    labelNome.innerHTML = "NOME:";

    const labelComp = document.createElement("label");
    labelComp.innerHTML = "COMPLEMENTO:";

    const labelCep = document.createElement("label");
    labelCep.innerHTML = "CEP:";

    const labelN = document.createElement("label");
    labelN.innerHTML = "Numero:";

    const enderecoCep = document.createElement("input");
    enderecoCep.disabled = true;
    enderecoCep.required = true;

    const senha = document.createElement("input");
    senha.setAttribute("required", "required");
    senha.disabled = true;
    //senha.required = true;
    senha.type = "password";

    const enderecoN = document.createElement("input");
    enderecoN.disabled = true;
    enderecoN.required = true;

    const enderecoComp = document.createElement("input");
    enderecoComp.disabled = true;
    enderecoComp.required = true;

    senha.value = "*************";

    enderecoCep.value = element.cep;

    enderecoN.value = element.numero;

    enderecoComp.value = element.complemento;

    enderecoCep.classList.add("h3");

    enderecoN.classList.add("h3");

    enderecoComp.classList.add("h3");

    const nascimento = document.createElement("input");
    nascimento.disabled = true;
    nascimento.required = true;

    nascimento.type = "datetime";
    nascimento.value = element.nascimento.substring(0, 10).replace(/-/g, "/");

    nascimento.classList.add("h3");

    div.appendChild(edit);

    div.appendChild(labelEmail);
    div.appendChild(email);

    div.appendChild(labelSenha);
    div.appendChild(senha);

    div.appendChild(labelCpf);
    div.appendChild(cpf);

    div.appendChild(labelNome);
    div.appendChild(nome);

    div.appendChild(labelCep);
    div.appendChild(enderecoCep);

    div.appendChild(labelN);
    div.appendChild(enderecoN);

    div.appendChild(labelComp);
    div.appendChild(enderecoComp);

    div.appendChild(labelNasc);
    div.appendChild(nascimento);

    const form1 = document.getElementById("form1");

    section.appendChild(div);

    form1.addEventListener("submit", async (e) => {
      e.preventDefault();

      const user = {
        nome: nome.value,
        cpf: cpf.value,
        email: email.value,
        senha: senha.value,
        nascimento: nascimento.value,
        cep: enderecoCep.value,
        numero: enderecoN.value,
        complemento: enderecoComp.value,
      };
      console.log(user);

      const options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(user),
      };

      console.log(options);
      const response = await fetch(
        `http://localhost:3000/alterar/${element.id}`,
        options
      );
      const usuario = await response.json();
      await buscarUsuario();
      console.log(usuario);
    });
  });
};

buscarUsuario();
