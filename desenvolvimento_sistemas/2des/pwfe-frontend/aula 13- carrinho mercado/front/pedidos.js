const tbody = document.querySelector("tbody");

function carregarPedido() {
    var dados = {}
    dados = JSON.parse(window.localStorage.getItem("info"));
    console.log(dados)
    tbody.innerHTML=""
        dados.forEach((element, index) => {
            const tr = document.createElement("tr");
            tr.classList = "linha";
    
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
            botao_cardapio.innerHTML = "Adicionar";
            botao_cardapio.className = "botao_cardapio";
    
            botao_cardapio.addEventListener("click", () => {
              dados.splice(index,1);
              console.log(dados)
              window.localStorage.setItem("info", JSON.stringify(dados))
            
              carregarPedido()
            })
    
    
            tr.appendChild(pid);
            tr.appendChild(pnome);
            tr.appendChild(pdescricao);
            tr.appendChild(ppreco);
            tr.appendChild(psituacao);
            tr.appendChild(botao_cardapio);
    
            tbody.appendChild(tr);
    
        })
    }
    
    