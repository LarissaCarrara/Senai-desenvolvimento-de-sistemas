//JSON

var usuario1 = {
    "nome":"fulano",
    "idade": 20,
    "cadastrado":true,
    "notas": [8,5,6]

};
console.log(usuario1.cadastrado);

var usuario2 = {
    "nome":"ciclano",
    "idade": 25,
    "cadastrado": false,
    "notas": [7,9,8]
};
console.log(usuario2.nome);

// for(let i=0; i<usuario2.notas.length; i++){
//     console.log(usuario2.notas[i]);
// }

var usuarios = []; //vetor json

usuarios.push(usuario1); //adicionando no vetor
usuarios.push(usuario2);    

console.log(usuarios);

for(let i =0; i<usuarios.length; i++){
    console.log(usuarios[i].nome);
}