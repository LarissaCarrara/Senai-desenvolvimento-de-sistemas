const tbody = document.querySelector("#tbody");

// function listar(idCategoria){
//     let url = 'http://localhost:3000/listar';
//     if(idCategoria != undefined) {
//         url = 'http://localhost:3000/listar/' + idCategoria
//     }


    fetch('http://localhost:3000/listar')
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        if (data != undefined) {
            tbody.innerHTML = ""
            data.forEach(element => {
                console.log(element);
                const tr = document.createElement("tr");
                tr.className="tr";
                
                const pid = document.createElement("td");
                pid.innerHTML = element.id;
                pid.className="t";

                //let id = element.id;
                
                const psabor = document.createElement("td");
                psabor.innerHTML = element.sabor;
                psabor.classList="t";
                
                // pnome.addEventListener("click", ()=>{
                //      cardapio(id);
                //  })
                const ppreco = document.createElement("td");
                ppreco.innerHTML = element.preco;
                ppreco.classList="t";

                const pdescricao = document.createElement("td");
                pdescricao.innerHTML = element.preco;
                pdescricao.classList="t";
               
                const botao_cardapio = document.createElement("button");



                // botao_cardapio.innerHTML = "Cardápio";
                // botao_cardapio.className="botao_cardapio";

                //  botao_cardapio.addEventListener("click", ()=>{
                //     cardapio();
                // })

                tr.appendChild(pid);
                tr.appendChild(psabor);
                tr.appendChild(ppreco);
                tr.appendChild(pdescricao); 
                
                tbody.appendChild(tr);

        })
    }
})
    
