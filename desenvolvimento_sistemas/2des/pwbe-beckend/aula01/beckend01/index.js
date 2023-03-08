
//importações
const express  = require("express");

//corpo
const raiz = (req,res)=>{
    res.send("Back end ativo");
}

const interacao = (req,res) =>{
    let nome = req.query.nome; 
    let idade = req.query.idade;
    res.send(`Olá ${nome}, seu nome possui ${nome.length} letras e vc tem ${idade} anos`);
}

//configuracao http
const app = express(); //passando o express para app
app.get("/",raiz); //rotas
app.get("/interacao",interacao); //rotas

//teste no console
app.listen(3000,() =>{
    console.log("respondendo na porta 3000")
});