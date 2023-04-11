let nomes= ["fulano", "beltrano", "ciclano"];
let tam = nomes.length;
console.log(tam);
console.log(nomes);

let categorias = ["futebol", "basquete", "volei"];
console.log(categorias.join(";")); //transforma o array em string, separa as palavras

categorias.pop(); //exclui o conteudo da última casa
console.log(categorias);

categorias.push("natação"); //adiciona no vetor
categorias.push("bocha");
console.log(categorias);

let pos = categorias.indexOf("basquete"); //verifica a posição da palavra no vetor
console.log(pos);

let novo= categorias.splice(pos,1); //armazena as informações que serão removidas
console.log(categorias); //imprime o vetor com as exclusões

categorias.sort(); //coloca em ordem alfabética
console.log(categorias);

categorias.reverse(); //coloca o vetor de trás para frente
console.log(categorias);

console.log(Math.floor(0.95)); //arredonda para baixo, nesse caso = 0
console.log(Math.ceil(0.15)); //arredonda para cima, nesse caso = 1
console.log(Math.round(0.49)); //arredonda para o valor mais próximo, nesse caso = 0

console.log(Math.random()); //sorteia um número aleatório
console.log(Math.floor(Math.random()*100)); //sorteia um número aleatório de 0 a 99
console.log(Math.ceil(Math.random()*100)); //sorteia um número aleatório de 1 a 100



