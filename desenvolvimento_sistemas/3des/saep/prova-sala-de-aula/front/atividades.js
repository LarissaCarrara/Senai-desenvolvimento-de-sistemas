const section = document.querySelector("section");

const dadosArmazenadosString = localStorage.getItem('dadosala');
const dadosArmazenados = JSON.parse(dadosArmazenadosString);
function carregardados(){
    const nomeprof = document.querySelector("#nomeprof");

    

    fetch(`http://localhost:3000/listaratividade/${dadosArmazenados.idsala}`).then(resp => {
        return resp.json();
    })
        .then(data => {
            if (data != undefined) {
                data.forEach(element => {
                    console.log(element);
                    nomeprof.innerHTML= dadosArmazenados.nome
                    const div = document.createElement("div");

                    div.className = "card";
                    const pnome = document.createElement("p")
                    pnome.className = "nome"
                    pnome.innerHTML = element.nome;

                   
                   

                    const pdetalhes = document.createElement("p");
                    pdetalhes.innerHTML = element.descricao;
                    pdetalhes.className = "pdetalhes"

                   
            
                
                    div.appendChild(pnome);
                    div.appendChild(pdetalhes); 
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

    const nova_atividade = document.querySelector("#novatividade").value;
    const nova_descricao = document.querySelector("#novadescricao").value;

    const dadoscadastrar = {
        "nome": nova_atividade,
        "descricao": nova_descricao,
        "id": dadosArmazenados.idsala
    }

    console.log(dadoscadastrar)

    fetch('http://localhost:3000/cadastraratividade',
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

                alert("Atividade criada com sucesso");
                window.location.reload()

                //window.location.href = "./home.html";
                // window.location.href = `./cardapio.html?id=${id}`;
            } else {
                alert('atividade não criada')
            }
        })


}

function voltar(){
    window.location.href="./home.html"
}

function exibirModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
