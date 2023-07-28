const con = require('../dao/connect');


const cadastrar = (req, res) => {
    const { nome, email, senha } = req.body;
    let query = `INSERT INTO cliente (nome, email, senha) VALUES ('${nome}','${email}','${password(senha)}')`
    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
})
}

const login = (req, res) => {
    const { email, senha } = req.body;
    console.log(req.body);
    let query = `SELECT * FROM cliente WHERE email = '${email}' and senha = password('${senha}')`; //montando string

    con.query(query, (err, response) => {
        console.log(response);
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

const listar = (req, res) =>{
    let query = "SELECT restaurante.id, restaurante.nome, restaurante.endereco, categoria.nome as categoria FROM restaurante INNER JOIN categoria ON restaurante.categoriaid = categoria.id";


    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const filtrar = (req,res) =>{
   const  {categoriaid} = req.params;

   let query = `SELECT restaurante.id, restaurante.nome, restaurante.endereco, categoria.nome as categoria FROM restaurante INNER JOIN categoria ON restaurante.categoriaid = categoria.id WHERE restaurante.categoriaid = ${categoriaid}`
    //SELECT * FROM restaurante INNER JOIN categoria ON restaurante.categoriaid = categoria.id
   con.query(query, (err,response) => {
    if(err == undefined){
        res.status(200).json(response).end();
    }else{
        res.status(400).json(err).end();
    }
})
}


const listarCardapio = (req, res) =>{
    let query = "SELECT cardapio.restauranteid, cardapio.descricao, cardapio.valor, restaurante.nome FROM cardapio INNER JOIN restaurante ON restaurante.id = cardapio.restauranteid";


    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    cadastrar,
    login,
    listar,
    filtrar,
    listarCardapio
}

//200-deu certo 201 - criou  202- aceito 400-erro 404- não encontrado 500-erro mto grave- tabela http