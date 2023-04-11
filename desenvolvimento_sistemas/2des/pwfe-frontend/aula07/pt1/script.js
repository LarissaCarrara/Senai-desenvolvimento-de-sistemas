const arr = [5,8,7,10,2,6,5,2,10];

const body = document.querySelector("body");

arr.forEach((item, indice)=>{
    let calc = item * 2;

    texto = document.createElement("p");
    texto.innerHTML = `${item} x 2 = ${calc}`; //item + " x 2 = " + calc

    body.appendChild(texto);

});

//MAP - percorre o ARR e armazena valores em um novo vetor
let novoArr = arr.map((item,indice)=>{
    let calc = item * 2;
    return calc;
})
console.log(novoArr);

//FILTER - retorna um número = x
let filterArr = arr.filter((item, indice)=>{
    return ((item>=5)&&(item<=10));
})
console.log(filterArr);

//FIND - encontrar um elemento (!º q achar)
let data= arr.find((item,indice)=>{
    return item == 5;
})
console.log(data);

//ex filter e find
let info = [
    {
        "nome": "Fulano da Silva",
        "matricula": 12345,
        "vendas": 5
    },
    {
        "nome": "Beltrano da Silva",
        "matricula": 54321,
        "vendas": 10
    },
    {
        "nome": "Ciclano da Silva",
        "matricula": 56789,
        "vendas": 8
    }
];

let metaVendas = 7;

let vendedores = info.filter((valor, i)=>{
    return valor.vendas >=7;
});
console.log(vendedores);

let vendedor = info.find((valor)=>{
return valor.matricula =54321;
})
console.log(vendedor.nome);