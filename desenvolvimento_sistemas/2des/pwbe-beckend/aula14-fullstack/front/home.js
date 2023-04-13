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

                const pcategoriaid = document.createElement("td");
                pcategoriaid.innerHTML = element.categoria;
                pcategoriaid.classList="t";

                const pendereco = document.createElement("td");
                pendereco.innerHTML = element.endereco;
                pendereco.classList="t";
               

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