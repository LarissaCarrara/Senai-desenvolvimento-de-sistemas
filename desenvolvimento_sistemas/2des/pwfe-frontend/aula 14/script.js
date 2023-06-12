const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

async function entrar() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value, senha: senha.value }),
  };

  const response = await fetch("http://localhost:3000/login", options);
  const dados = await response.json();
  console.log(dados)
  if (dados.success) {
    window.localStorage.setItem("id", JSON.stringify(dados.usuario[0].id));
    window.location.href = "home.html";
  }
}
