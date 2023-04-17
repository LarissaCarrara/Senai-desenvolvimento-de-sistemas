const section = document.querySelector("section");
const tbody = document.querySelector("tbody");
const select = document.querySelector("#select");

function filtrar(){
    listar(select.value);
}

function listar(idCategoria){
    let url = 'http://localhost:3000/listar';
    if(idCategoria != undefined) {
        url = 'http://localhost:3000/listar/' + idCategoria
    }

    console.log(url);

    fetch(url) 
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        if (data != undefined) {
            tbody.innerHTML = ""
            data.forEach(element => {
                console.log(element);
                const tr = document.createElement("tr");
                
                const pnome = document.createElement("td");
                pnome.innerHTML = element.nome;
                pnome.className="t";

                let id = element.id;
                
                const pcategoriaid = document.createElement("td");
                pcategoriaid.innerHTML = element.categoria;
                pcategoriaid.classList="t";
                
                pnome.addEventListener("click", ()=>{
                     cardapio(id);
                 })
                const pendereco = document.createElement("td");
                pendereco.innerHTML = element.endereco;
                pendereco.classList="t";
               
                const botao_cardapio = document.createElement("button");



                // botao_cardapio.innerHTML = "Cardápio";
                // botao_cardapio.className="botao_cardapio";

                //  botao_cardapio.addEventListener("click", ()=>{
                //     cardapio();
                // })

                tr.appendChild(pnome);
                tr.appendChild(pcategoriaid);
                tr.appendChild(pendereco); 
                
                tbody.appendChild(tr);

        })
    }
})
    
}

function carregarCategorias() {
    fetch("http://localhost:3000/categoria").then(resp => {
        return resp.json();
    })
    .then(data => {
        data.forEach(categoria => {
            let option = document.createElement("option");
            option.value = categoria.id;
            option.innerHTML = categoria.nome;
            select.appendChild(option)
        })
    })
}

function carregaTela() {
    carregarCategorias();
    listar();
}

function cardapio(id){
console.log(id);
  window.location.href = `./cardapio.html?id=${id}`;
}