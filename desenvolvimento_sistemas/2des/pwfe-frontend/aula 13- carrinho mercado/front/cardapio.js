
const tbody = document.querySelector("tbody");

function carregaDados(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    fetch(`http://localhost:3000/listar/cardapio/${id}`).then(resp => {
        return resp.json();
    })
    .then(data => {
        if (data != undefined) {
            tbody.innerHTML = ""
            data.forEach(element => {
                console.log(element);
                const tr = document.createElement("tr");
                
                const pdescricao = document.createElement("td");
                pdescricao.innerHTML = element.descricao;
                pdescricao.className="t";

                
                const ppreco = document.createElement("td");
                ppreco.innerHTML = element.valor;
                ppreco.classList="t";
                
              
               

                tr.appendChild(pdescricao);
                tr.appendChild(ppreco);
            
                
                tbody.appendChild(tr);

        })
    }
})
}