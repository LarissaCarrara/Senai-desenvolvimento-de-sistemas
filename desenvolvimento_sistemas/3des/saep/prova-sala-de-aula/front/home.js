const section = document.querySelector("section");


function carregaDados() {
    const nomeprof = document.querySelector("#nomeprof");
    // const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get("id");

    const dadosArmazenadosString = localStorage.getItem('dadosUsuario');
    const dadosArmazenados = JSON.parse(dadosArmazenadosString);


    fetch(`http://localhost:3000/listar/${dadosArmazenados.email}`).then(resp => {
        return resp.json();
    })
        .then(data => {
            if (data != undefined) {
                data.forEach(element => {
                    console.log(element);
                    nomeprof.innerHTML= element.professor
                    const div = document.createElement("div");

                    div.className = "card";
                    const pnomesala = document.createElement("p")
                    pnomesala.className = "nomesala"
                    pnomesala.innerHTML = element.sala;

                    const id = {
                        "id": element.id
                    }

                    const dadoId = JSON.stringify(id);
                    localStorage.setItem('idprof', dadoId);

                    const pdetalhes = document.createElement("p");
                    pdetalhes.innerHTML = "Destalhes";
                    pdetalhes.className = "pdetalhes"

                    pdetalhes.addEventListener("click", (e)=>{

                        const idsala ={
                            "idsala":element.id_sala,
                            "nome": element.professor
                        }
                        const dadosala = JSON.stringify(idsala);
                        localStorage.setItem('dadosala', dadosala);
                        window.location.href = "./atividades.html";
                    })
                    const pexcluir = document.createElement("p");
                    pexcluir.innerHTML = "-";
                    pexcluir.className = "pexcluir"

                    
                    pexcluir.addEventListener("click", (e) => {
                        console.log(element.id_sala)
                        fetch(`http://localhost:3000/remover/${element.id_sala}`, {
                            method: 'DELETE',
                        })
                            .then(resp => resp.json())  
                            .then(data => {
                                console.log(data)
                                if (data.status == 202) {
                                    alert("Sala excluida")
                                    console.log("Operação bem-sucedida!");
                                    window.location.reload()
                                } else {
                                    alert('Essa sala não pode ser excluída, pois possui atividades vinculadas a ela')
                                    console.error("Erro na operação:", data.error);
                                }
                            })
                            .catch(error => {
                                console.error("Erro na requisição:", error);
                            });
                    })

                    div.appendChild(pnomesala);
                    div.appendChild(pdetalhes);
                    div.appendChild(pexcluir);
                    section.appendChild(div)

                    // const pdescricao = document.createElement("td");
                    // pdescricao.innerHTML = element.descricao;
                    // pdescricao.className="t";


                    // const ppreco = document.createElement("td");
                    // ppreco.innerHTML = element.valor;
                    // ppreco.classList="t";




                    // tr.appendChild(pdescricao);
                    // tr.appendChild(ppreco);


                    // tbody.appendChild(tr);

                })
            }
        })


}//fecha carregadados


function cadastrar() {

    const novaturma = document.querySelector("#novaturma").value;

    const dadosArmazenados = localStorage.getItem('idprof');
    const dadosArmazenados2 = JSON.parse(dadosArmazenados);

    const dadoscadastrar = {
        "id": dadosArmazenados2.id,
        "nome": novaturma
    }

    console.log(dadoscadastrar)

    fetch('http://localhost:3000/cadastrar',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadoscadastrar)
        }).then(resp => {
            return resp.status;
        })
        .then(data => {
            if (data == 202) {
                console.log(data);

                alert("Sala criada com sucesso");
                window.location.reload()

                //window.location.href = "./home.html";
                // window.location.href = `./cardapio.html?id=${id}`;
            } else {
                alert('Sala não criada')
            }
        })


}

function exibirModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}


function sair() {

    localStorage.clear();
    window.location.href = "./index.html";
}