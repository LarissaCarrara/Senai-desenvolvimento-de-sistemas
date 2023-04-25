const tbody = document.querySelector("tbody");

function PaginaProduto(){
    window.location.href = `./index.html`;

}
function PaginaVenda(){
    window.location.href = `./venda.html`;

}

function Alterar(dadosAlterados,id){
    fetch(`http://localhost:3000/alterar/${id}`, 
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
               alert("funcionario alterado");
            }
        })


}
function CarregarVendedor(){
    fetch("http://localhost:3000/listar")
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
                pid.innerHTML = element.id;
                pid.classList="t";

                const pnome = document.createElement("td");
                pnome.innerHTML = element.nome;
                pnome.className="t editable";

                let id = element.id;
                
                const pmatricula = document.createElement("td");
                pmatricula.innerHTML = element.matricula;
                pmatricula.classList="t editable";
                
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
                        "nome": pnome.innerHTML,
                        "matricula": pmatricula.innerHTML
                    }
                
                     Alterar(dadosAlterados, id);
                })

                botao_editar.addEventListener("click", (e)=>{   
                        e.target.parentNode.parentNode.querySelectorAll('.editable')
                            .forEach(td => {
                                console.log(td)
                                td.contentEditable = true
                                td.style.background = "#e0dada"

                            })
                 })


                 pbotao_Editar.appendChild(botao_editar); 
                 pbotao_Salvar.appendChild(botao_Salvar); 


                tr.appendChild(pid); 
                tr.appendChild(pnome);
                tr.appendChild(pmatricula);
                tr.appendChild(pmatricula);
                tr.appendChild(pbotao_Editar);
                tr.appendChild(pbotao_Salvar);
                
                tbody.appendChild(tr);

        })
    }
})
}