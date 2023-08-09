const tbody = document.querySelector("#tbody");

// function listar(idCategoria){
//     let url = 'http://localhost:3000/listar';
//     if(idCategoria != undefined) {
//         url = 'http://localhost:3000/listar/' + idCategoria
//     }

function carregar(){
    localStorage.clear()
}
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
                tr.className = "tr";

                const pid = document.createElement("td");
                pid.innerHTML = element.id;
                pid.className = "t";

                //let id = element.id;

                const psabor = document.createElement("td");
                psabor.innerHTML = element.sabor;
                psabor.classList = "t";

                // pnome.addEventListener("click", ()=>{
                //      cardapio(id);
                //  })
                const ppreco = document.createElement("td");
                ppreco.innerHTML = element.descricao;
                ppreco.classList = "t";

                const pdescricao = document.createElement("td");
                pdescricao.innerHTML = element.preco;
                pdescricao.classList = "t";

                // ... código anterior ...

                const tdbtn = document.createElement("td");
                tdbtn.classList = 't'
                // Criação do botão
                const botao_cardapio = document.createElement("button");
                botao_cardapio.innerHTML = "+";
                botao_cardapio.className = "botao_cardapio";

                const botao_cardapio2 = document.createElement("button");
                botao_cardapio2.innerHTML = "-";
                botao_cardapio2.className = "botao_cardapio";
                
                // Criação do elemento para exibir a quantidade
                const quantidadeElement = document.createElement("td");
                quantidadeElement.innerHTML = 0;
                quantidadeElement.className = "t";

                // Variável para armazenar a quantidade
                let quantidade = 0;
                
                
                botao_cardapio.addEventListener("click", () => {
                    // Incrementa a quantidade
                    quantidade++;
                    // Atualiza a quantidade exibida
                    atualizarQuantidade(element, quantidade);
                });
                
                botao_cardapio2.addEventListener("click", () => {
                    // decrementa a quantidade
                    if(quantidade>0){
                        quantidade--;
                    }
                    // Atualiza a quantidade exibida
                    atualizarQuantidade(element, quantidade);
                });
                const dados = {
                    descricao: '',
                    quantidade: 0
                };

                // Função para atualizar a quantidade exibida
                function atualizarQuantidade(element, quantidade) {
                    console.log(element,quantidade )
                    quantidadeElement.innerHTML = quantidade;
                    //string.innerHTML = 
                    dados.descricao = element
                    dados.quantidade = quantidade
                    let flag = false
                    let items = 0
                    if(dados.quantidade>0){
                         items = localStorage.getItem("dados")
                    }
                    console.log(items)
                    if (items) {
                        const newItems = JSON.parse(items);

                        //verifica se ja tem e se tiver so adiciona quantidade
                        //se nao adiciona o item todo
                        newItems.forEach(item =>{
                            console.log(item)
                            console.log({
                                recebido: item.descricao.id,
                                enviado: element.id
                            })
                            if(item.descricao.id == element.id){
                                console.log("entrou no if")
                                item.quantidade++
                                flag = true
                            }
                        })
                        if(!flag) newItems.push(dados)
                        const strNewItems = JSON.stringify(newItems)
                        localStorage.setItem('dados', strNewItems)
                        
                        return
                    }
                    
                    const dadosString = JSON.stringify([dados])
                    // localStorage.setItem({"quantidade": quantidade, "descricao": element});
                    localStorage.setItem('dados', dadosString);
                }
                
                tr.appendChild(pid);
                tr.appendChild(psabor);
                tr.appendChild(ppreco);
                tr.appendChild(pdescricao);
                tr.appendChild(tdbtn);
                tdbtn.appendChild(botao_cardapio);
                tdbtn.appendChild(botao_cardapio2);
                tr.appendChild(quantidadeElement); // Adiciona o elemento de quantidade à linha da tabela

                tbody.appendChild(tr);

                // ... código posterior ...



            })
        }
    })

    function carrinho(){
        const items = localStorage.getItem("dados")
        if(items){
            window.location.href = '../carrinho';
        }else{
            alert("Adicione itens ao carrinho")
        }
    }

