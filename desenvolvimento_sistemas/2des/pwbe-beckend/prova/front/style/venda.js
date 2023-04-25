const tbody = document.querySelector("tbody");
function PaginaProduto(){
    window.location.href = `./index.html`;

}
function PaginaFuncionarios(){
    window.location.href = `./funcionario.html`;

}

function Alterar(dadosAlterados,id){
    fetch(`http://localhost:3000/alterarVenda/${id}`, 
    {
       method: 'Put',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(dadosAlterados)
    }) .then(resp => {
            return resp.status;
        })
        .then(data => {
            if (data == 201) {
                console.log(data);
               alert("venda alterada");
            }
        })


}

function CarregarVenda(){
    fetch("http://localhost:3000/listarVenda")
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        if (data != undefined) {
            tbody.innerHTML = ""
            data.forEach(element => {
                console.log(element);
                const tr = document.createElement("tr");
                
                const pid = document.createElement("td");
                pid.innerHTML = element.vendaid;
                pid.classList="t";

                const pdata = document.createElement("td");
                pdata.innerHTML = new Date(element.data).toLocaleString('pt-BR').slice(0, 10);
                pdata.className="t editable";

                let id = element.vendaid;
                
                const pquantidade = document.createElement("td");
                pquantidade.innerHTML = element.quantidade;
                pquantidade.classList="t editable";
                
                const pidproduto = document.createElement("td");
                pidproduto.innerHTML = element.produtoid;
                pidproduto.classList="t editable";

                const pnome = document.createElement("td");
                pnome.innerHTML = element.nome;
                pnome.classList="t";
                
                  
                const idfuncionario = document.createElement("td");
                idfuncionario.innerHTML = element.id;
                idfuncionario.classList="t editable";

                const pfuncionario = document.createElement("td");
                pfuncionario.innerHTML = element.vendedor;
                pfuncionario.classList="t editable";
                
                const pbotao_Editar = document.createElement("td");

                const pbotao_Salvar = document.createElement("td");
                
                const botao_Salvar = document.createElement("button");
                botao_Salvar.innerHTML = "Salvar";
                botao_Salvar.className="botao";


                const botao_editar = document.createElement("button");
                botao_editar.innerHTML = "Editar";
                botao_editar.className="botao";
                
                botao_Salvar.addEventListener("click", (e) => {
                    e.target.parentNode.parentNode.querySelectorAll('.editable')
                    .forEach(td => {
                        console.log(td)
                        td.contentEditable = false
                        td.style.background = "transparent"

                    })
                    let dadosAlterados = {
                        "data": pdata.innerHTML,
                        "quantidade": pquantidade.innerHTML,
                        "produtoid": pidproduto.innerHTML,
                        "vendedorid": idfuncionario.innerHTML
                    }
                    console.log(dadosAlterados)
                     Alterar(dadosAlterados, id);
                })

                botao_editar.addEventListener("click", (e)=>{   
                        e.target.parentNode.parentNode.querySelectorAll('.editable')
                            .forEach(td => {
                                console.log(td)
                                td.contentEditable = true
                                td.style.background = "#FFF"

                            })
                 })


                 pbotao_Editar.appendChild(botao_editar); 
                 pbotao_Salvar.appendChild(botao_Salvar); 


                tr.appendChild(pid); 
                tr.appendChild(pdata);
                tr.appendChild(pquantidade);
                tr.appendChild(pidproduto);
                tr.appendChild(pnome);
                tr.appendChild(idfuncionario);
                tr.appendChild(pfuncionario);
                tr.appendChild(pbotao_Editar);
                tr.appendChild(pbotao_Salvar);
                
                tbody.appendChild(tr);

        })
    }
})
}

