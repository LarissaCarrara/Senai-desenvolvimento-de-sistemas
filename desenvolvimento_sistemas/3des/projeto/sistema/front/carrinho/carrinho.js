const tbody = document.querySelector("#tbody");

// function listar(idCategoria){
//     let url = 'http://localhost:3000/listar';
//     if(idCategoria != undefined) {
//         url = 'http://localhost:3000/listar/' + idCategoria
//     }


let dados = JSON.parse(localStorage.getItem("dados"));
dados.forEach(element => {
    if (element != undefined) {
            console.log(element);
            const tr = document.createElement("tr");
            tr.className = "tr";

            const pid = document.createElement("td");
            pid.innerHTML = element.descricao.id;
            pid.className = "t";

            //let id = element.id;

            const psabor = document.createElement("td");
            psabor.innerHTML = element.descricao.sabor;
            psabor.classList = "t";

           
            const pdescricao = document.createElement("td");
            pdescricao.innerHTML = element.descricao.preco;
            pdescricao.classList = "t";

            const ppreco = document.createElement("td");
            ppreco.innerHTML = element.descricao.descricao;
            ppreco.classList = "t";

            const pqtd = document.createElement("td");
            pqtd.innerHTML = element.quantidade;
            pqtd.classList = "t";

            const tdimg = document.createElement("td");
            tdimg.classList = "t"
            const lixeira = document.createElement("img");
            lixeira.src = "../assets/lixeira2.png";
            lixeira.classList="lixeira"
            
             lixeira.addEventListener("click", ()=>{
                const novoDados = dados.filter(item => item.id !== pid);
                dados = novoDados;
                console.log(dados)
             })

            tr.appendChild(pid);
            tr.appendChild(psabor);
            tr.appendChild(ppreco);
            tr.appendChild(pdescricao);
            tr.appendChild(pqtd);
            tdimg.appendChild(lixeira);
            tr.appendChild(tdimg)
            tbody.appendChild(tr);
        }    
}) 

function finalizar(){
//     fetch('http://localhost:3000/listar')
//     .then(resp => {
//         return resp.json();
//     })
//     .then(data => {
//         if (data != undefined) {
//         }
//     })
}

       

                // ... código posterior ...



    
    function carrinho(){
        const items = localStorage.getItem("dados")
        if(items){
            window.location.href = '../carrinho';
        }else{
            alert("Adicione itens ao carrinho")
        }
    }

