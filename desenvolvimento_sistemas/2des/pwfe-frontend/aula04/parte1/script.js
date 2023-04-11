
var paragrafo = document.querySelector("p"); //encontrou o p

console.log(paragrafo.innerHTML); //imprimiu o conteudo do p
paragrafo.innerHTML = "novo texto"; //atribuiu um novo texto

//input
var inpNome = document.querySelector("#nome"); 


function mostrarNome () {
    let valor = inpNome.value;
    
    let data = {
        "nome": valor
    };
    console.log(inpNome.value); // mostra no console o texto = value
    paragrafo.innerHTML = JSON.stringify(data); //função que recebe um json e transforma em string - recebe data e imprime
    paragrafo.innerHTML= data.nome; //mostra só o txto
}

var foto = document.querySelector("#foto");
var descricao = document.querySelector("#descricao");
function atualizarDados(){
    let info= {
    "descricao": "Um panda feliz",
    "imagem": [
        "https://st.depositphotos.com/1787196/1327/i/950/depositphotos_13270966-stock-photo-crazy-panda.jpg", 
        "https://img.freepik.com/vetores-gratis/cute-panda-bebericando-boba-milk-tea-icon-ilustracao-dos-desenhos-animados-conceito-de-icone-de-comida-animal-isolado-estilo-flat-cartoon_138676-2173.jpg?w=2000", 
        "https://img.freepik.com/vetores-gratis/panda-bonito-comendo-pipoca-icone-dos-desenhos-animados-ilustracao-conceito-de-icone-de-comida-animal-isolado-estilo-flat-cartoon_138676-2562.jpg?w=2000"
    ] 
    };

    descricao.innerHTML = info.descricao;
    foto.src = info.imagem[gerarNumero()];

}

function gerarNumero(){
    let num = Math.floor(Math.random() * 3);
    return num;
}