


const tbody = document.querySelector("tbody");



function carregarPedido() {
    tbody.innerHTML = ""
    const qtds = JSON.parse(window.localStorage.getItem("qtds")) || [];
    var dados = {}
    dados = JSON.parse(window.localStorage.getItem("info2")) || [];
    console.log(dados)
    dados.forEach((element, index) => {
        
        const tr = document.createElement("tr");
        tr.classList = "linha";

        const pdata = document.createElement("td");
        pdata.innerHTML = element.data;
        pdata.classList = "t";

        const pid = document.createElement("td");
        pid.innerHTML = element.id;
        pid.classList = "t";

        const pnome = document.createElement("td");
        pnome.innerHTML = element.nome;
        pnome.className = "t";

        const pdescricao = document.createElement("td");
        pdescricao.innerHTML = element.descricao;
        pdescricao.classList = "t";

        const ppreco = document.createElement("td");
        ppreco.innerHTML = element.preco;
        ppreco.classList = "t";

        const psituacao = document.createElement("td");
        psituacao.innerHTML = 'Em preparação';
        psituacao.classList = "t";

        const botao_cardapio = document.createElement("button");
        botao_cardapio.innerHTML = "Remover";
        botao_cardapio.className = "botao_cardapio";

        botao_cardapio.addEventListener("click", () => {
            dados.splice(index, 1);
            console.log(dados)
            window.localStorage.setItem("info2", JSON.stringify(dados))

            carregarPedido()
        })

        

        tr.appendChild(pdata);
        tr.appendChild(pid);
        tr.appendChild(pnome);
        tr.appendChild(pdescricao);
        tr.appendChild(ppreco);
        tr.appendChild(psituacao);
        tr.appendChild(botao_cardapio);

        tbody.appendChild(tr);

        if (index === dados.length - 1) {
            const tr = document.createElement("tr");
            tr.classList = "vazio";
            const vazio = document.createElement("td");
            const tr2 = document.createElement("tr");
            tr2.classList = "vazio";
            const vazio2 = document.createElement("td");
            const tr3 = document.createElement("tr");
            tr3.classList = "vazio";
            const vazio3 = document.createElement("td");
            const tr4 = document.createElement("tr");
            tr4.classList = "vazio";
            const vazio4 = document.createElement("td");
            const tr5 = document.createElement("tr");
            tr5.classList = "vazio";
            const vazio5 = document.createElement("td");
          
            vazio.innerHTML = " ";
            vazio2.innerHTML = " ";
            vazio3.innerHTML = " ";
            vazio4.innerHTML = " ";
            vazio5.innerHTML = " ";
          
            tr.appendChild(vazio);
            tr.appendChild(vazio2);
            tr.appendChild(vazio3);
            tr.appendChild(vazio4);
            tr.appendChild(vazio5);
          
            tbody.appendChild(tr);
            tbody.appendChild(tr2);
            tbody.appendChild(tr3);
            tbody.appendChild(tr4);
            tbody.appendChild(tr5);
          }
          

        // qtds.forEach(item => {
        //     if(index == item-1) {
        //         const tr = document.createElement("tr");
        //         tr.classList = "vazio";
        //         const vazio = document.createElement("td");
        //         const tr2 = document.createElement("tr");
        //         tr.classList = "vazio";
        //         const vazio2 = document.createElement("td");
        //         const tr3 = document.createElement("tr");
              
        //         const vazio3 = document.createElement("td");
        //         const tr4 = document.createElement("tr");
                
        //         const vazio4 = document.createElement("td");
        //         const tr5 = document.createElement("tr");
               
        //         const vazio5 = document.createElement("td");
        //         vazio.innerHTML = " "
        //         vazio2.innerHTML = " "
        //         vazio3.innerHTML = " "
        //         vazio4.innerHTML = " "
        //         vazio5.innerHTML = " "
        //         tr.appendChild(vazio)
        //         tr.appendChild(vazio2)
        //         tr.appendChild(vazio3)
        //         tr.appendChild(vazio4)
        //         tr.appendChild(vazio5)
        //         tbody.appendChild(tr)
        //         tbody.appendChild(tr2)
        //         tbody.appendChild(tr3)
        //         tbody.appendChild(tr4)
        //         tbody.appendChild(tr5)
        //     }
        // })
    })
                
}

function limpar (){
    window.localStorage.clear();
    carregarPedido()
}