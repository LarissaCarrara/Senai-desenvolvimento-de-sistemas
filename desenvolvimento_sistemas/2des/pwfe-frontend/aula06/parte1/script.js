const data = [
    {
        "titulo": "Titulo 3 ",
        "texto":"Texto 123"
    },
    {
        "titulo": "Titulo 4 ",
        "texto":"Texto 4566"
    },
    {
        "titulo": "Titulo 5 ",
        "texto":"Texto 342"
    }
    
]


const body = document.querySelector("body");
const card = document.querySelector('.card');

for(let i = 0; i < data.length; i++) {

    var clone = card.cloneNode(true); //clonando

    clone.classList.remove('model'); //remove a classe model do clone
    clone.querySelector("h3").innerHTML = data[i].titulo;
    clone.querySelector("p").innerHTML = data[i].texto;
    

    clone.querySelector("button").addEventListener("click", (event)=>{
        console.log(event.target.parentNode.remove());
        //let info = document.querySelector("p");
        //info.innerHTML = "Algum texto";
        //event.target.parentNode.appendChild(info);
        
    });//evento, funcao
    body.appendChild(clone);

}

card.remove();//remove o card do html



