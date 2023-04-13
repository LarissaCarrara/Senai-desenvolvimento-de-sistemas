const con = require('../dao/connect');

const login = (req, res) => {
    const { email, senha } = req.body;
    console.log(req.body);
    let query = `SELECT * FROM cliente WHERE cliente.email = '${email}'`; //montando string

    con.query(query, (err, response) => {
        console.log(response);
        if (response.length > 0) {
            if (response[0].senha == senha) {
                res.status(202).end();
            }
        } else {
            res.status(404).json(err).end();
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

const categoria = (req,res) =>{
    let query = "SELECT * FROM categoria";

    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}
module.exports = {
    login,
    listar,
    filtrar,
    categoria
}

//200-deu certo 201 - criou  202- aceito 400-erro 404- não encontrado 500-erro mto grave- tabela http