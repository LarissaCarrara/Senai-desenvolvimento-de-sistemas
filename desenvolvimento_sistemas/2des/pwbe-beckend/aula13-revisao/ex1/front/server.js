let nome = document.querySelector("#nome");
let nascimento = document.querySelector("#data");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let tbody = document.querySelector("tbody");
let thead = document.querySelector("thead");
let div = document.querySelector("#tit_lista")
function remover(id) {

    fetch(`http://localhost:3000/remove/${id}`,
        {
            method: 'DELETE'
        }).then(resp => {
            return resp.status;
        })
        .then(data => {
            if (data == 201) {
                console.log(data);

            }
        })
}

function cadastrar() {

    paciente = {
        "nome_completo": nome.value,
        "nascimento": nascimento.value,
        "peso": peso.value,
        "altura": altura.value
    }
    console.log(paciente);
    fetch('http://localhost:3000/nova',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(paciente)
        }).then(resp => {
            return resp.status;
        })
        .then(data => {
            if (data == 201) {
                console.log(data);
                alert("cadastrado");
            }
        })

}

function editar(id, pacientes) {


    console.log(pacientes);
    fetch(`http://localhost:3000/alterar/${id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pacientes)
        }).then(resp => {
            return resp.status;
        })
        .then(data => {
            if (data == 201) {
                console.log(data);
                alert("cadastrado");
            }
        })
}

function listar() {

    div.style.display = "block";
    thead.style.display = "block";
    fetch('http://localhost:3000/pacientes')
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            if (data != undefined) {
                tbody.innerHTML = ""
                data.forEach(element => {
                    console.log(element);
                    const tr = document.createElement("tr");

                    let id = element.id;
                    const pnome = document.createElement("td");
                    pnome.innerHTML = element.nome_completo;
                    pnome.className = "t";

                    const pnascimento = document.createElement("td");
                    pnascimento.innerHTML = new Date(element.nascimento).toLocaleString('pt-BR').slice(0, 10);
                    pnascimento.classList = "t";

                    const pidade = document.createElement("td");
                    pidade.innerHTML = element.idade;
                    pidade.classList = "t";



                    const ppeso = document.createElement("td");
                    ppeso.innerHTML = element.peso;
                    ppeso.classList = "t";

                    const paltura = document.createElement("td");
                    paltura.innerHTML = element.altura;
                    paltura.classList = "t";

                    const pimc = document.createElement("td");
                    pimc.innerHTML = element.imc;
                    pimc.classList = "t";

                    const pdiag = document.createElement("td");
                    pdiag.innerHTML = element.diagnostico;
                    pdiag.classList = "t";

                    const imagem = document.createElement("img");
                    imagem.src = "./assets/x.png";
                    imagem.className = "imagem";

                    imagem.addEventListener("click", () => {
                        remover(id);
                        tr.remove(id);
                    })

                    const btn_editar = document.createElement("button");
                    btn_editar.innerHTML = "Editar";
                    btn_editar.className = "btn_editar";

                    btn_editar.addEventListener("click", (e) => {

                        e.target.parentNode.querySelectorAll('td')
                            .forEach(td => {
                                td.contentEditable = true
                                td.style.background = "#ccc"
                            })


                        let pacientes = {
                            "nome_completo": pnome.value,
                            "nascimento": pnascimento.value,
                            "peso": ppeso.value,
                            "altura": paltura.value
                        }

                        editar(id, pacientes);
                    })



                    tr.appendChild(pnome);
                    tr.appendChild(pnascimento);
                    tr.appendChild(pidade);
                    tr.appendChild(ppeso);
                    tr.appendChild(paltura);
                    tr.appendChild(pimc);
                    tr.appendChild(pdiag);
                    tr.appendChild(imagem);
                    tr.appendChild(btn_editar);
    
                    tbody.appendChild(tr);
                })

            }

        })
}


