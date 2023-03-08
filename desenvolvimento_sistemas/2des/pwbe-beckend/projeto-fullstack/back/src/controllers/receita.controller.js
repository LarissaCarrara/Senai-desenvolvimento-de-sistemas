//funcao e processamento

const con = require("../dao/connect");
const adicionar = (req, res) =>{
    const { nome, ingredientes, modofazer, rendimento } = req.body;

    let query = `INSERT INTO receita VALUES ("",'${nome}','${ingredientes}', '${modofazer}', '${rendimento}')`; //montando string

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

const listar = (req, res) =>{
    let query = "SELECT * FROM receita";


    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listaruma = (req, res) =>{
    let query = `SELECT * FROM receita WHERE id = ${req.params.id}`;


    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterar = (req, res) =>{

    let query = `UPDATE receita SET nome = ${nome},
    ingredientes = ${ingredientes},
    modofazer = ${modofazer},
    rendimento = ${rendimento}
    WHERE id = ${req.params.id}`; //recebe id
    
    const { nome, ingredientes, modofazer, rendimento} = req.body;

    
    con.query(query, (err,response) => { //manda e retorna uma resposta
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const remover = (req, res) =>{

    let query = `DELETE FROM receita WHERE id = ${req.params.id}`; 

    
    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}
module.exports = {
    adicionar,
    listar,
    listaruma,
    alterar,
    remover
}

