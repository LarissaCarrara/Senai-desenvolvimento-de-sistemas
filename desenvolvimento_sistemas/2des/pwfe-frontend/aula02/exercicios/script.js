/* EXERCÍCIO 1
Ana Maria, precisa de dinheiro e decidiu fazer 
uma rifa de sua bicicleta. Para ajudar Ana maria
 crie uma função que receba como parâmetro um vetor 
 de 10 nomes e sorteie um aleatóriamente.
*/


/*
let vetor=[];
for(let i=0; i<10;i++){
    vetor.push(prompt("insira o " + (i+1) + "º nome"));
}

let num = Math.floor(Math.random()*10);

console.log(vetor[num] + " foi o/a vencedor/a");
*/


/*EXERCÍCIO 2
Em alguns casos a rifa poderá ter mais de um 
ganhador então crie uma função que receba como 
parâmetro um vetor de 10 nomes e um total de 
quantos deseja sortear, e mostre na tela estes 
nomes sorteados.
*/


/*
let vetor=[];
let num=[];
let num1=[];
let i = 0;
let n,k=0;
let sorteado;

let qtd = prompt("Digite quantos ganhadores terá o sorteio: ");

for(let i=0; i<10;i++){
    vetor.push(prompt("insira o " + (i+1) + "º nome"));
}


do{
    num.push(Math.floor(Math.random()*10));
    num1[i] = num[k];
    if(i == 0){
        i++;
    } 
    else{
        sorteado = 0;
        for(let j = 0; j < i; j++){
            if(num1[i] == num1[j]){
                sorteado = 1;
            }
               
        }
        if(sorteado == 0) {
            i++;
        }
       
    }
    k++;
}while(i < qtd);

console.log("Os ganhadores serão: " );

for( let i=0; i<qtd; i++){

    console.log( vetor[num1[i]]);
}


*/



/*EXERCÍCIO 3
Ana Maria organiza campeonatos de diversos 
esportes, como futebol, basquete, entre outros,
crie uma função que receba 40 nomes de times 
e quantos times cada grupo deve ter, a função
 deve mostrar na tela os times separados em 
 grupos porém sorteados aleatóriamente.

*/
/*

function sorteio(nomes, quantos) {
    var i = 0;
    var j;
    var n = new Array(40);
    var encontrado;
    var grupo = 1;
    var elementos = 0;
    //Preenche um vetor com números aleatórios não repetidos de tamanho 40
    do {
      n[i] = Math.floor(Math.random() * 40);
      if (i === 0) i++;
      else {
        encontrado = 0;
        for (j = 0; j < i; j++) {
          if (n[i] === n[j]) encontrado = 1;
        }
        if (!encontrado) i++;
      }
    } while (i < 40);
  
    console.log("Os times sorteados foram:");
    for (i = 0; i < 40; i++) {
      if (elementos === i) {
        console.log("Grupo " + grupo);
        elementos += quantos;
        grupo++;
      }
      console.log(nomes[n[i]]);
    }
  }
  
  var nomes = new Array(40);
  console.log("Digite os nomes dos 40 times:");
  for (var i = 0; i < 40; i++) {
    nomes[i] = prompt();
  } 
  
  console.log("Digite quantos integrantes cadas grupo deve ter:");
  var quantos = parseInt(prompt());
  
  sorteio(nomes, quantos);
  */


    /*EXERCICIO 4
    Para participar dos campeonatos os
    competidores preenchem um formulário
    com sua data de nascimento, crie uma
    função que receba o ano de nascimento 
    e retorne a idade do competidor.
    */

    /*
    function calculaidade(ano) {
        var ano_atual = new Date().getFullYear();
        var idade = ano_atual - ano;
        return idade;
    }

    let idade = prompt("Digite o ano do nascimento: ");
    console.log(calculaidade(idade)); 

    
    */


    /*EXERCICIO 5
    Ana maria precisa de mais precisão
    no cálculo da idade, então crie uma 
    função que receba dia, mês e ano de 
    nascimento e retorne a idade do competidor.*/

/*

function calculaidade(ano){
    var ano_atual = new Date().getFullYear();
    var idade = ano_atual - ano;
    return idade;
}

function calculaidade(dia, mes, ano){
    var data_atual= new Date();
    var ano_atual = data_atual.getFullYear();
    var mes_atual = data_atual.getMonth();
    var dia_atual = data_atual.getDate();

    var idade = ano_atual - ano;

    if(mes_atual < mes || (mes_atual === mes && dia_atual < dia)){
        idade--;
    }
    return idade;
}

let dia = prompt("Digite o dia do seu nascimento: ");
let mes = prompt("Digite o mes do seu nascimento: ");
let ano = prompt("Digite o ano do seu nascimento: ");
     
console.log(calculaidade(dia, mes, ano ));

*/



