const con = require ('../dao/connect');

const cadastrar = (req,res) =>{
    const {nome, valor} = req.body;

    let query = `INSERT INTO produtos VALUES("", '${nome}', ${valor})`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });

}


const listar = (req,res) =>{

    let query = `SELECT * FROM produtos`;

    con.query(query, (err, response )=>{
        if(err == undefined){

            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

const alterar = (req, res)=>{
    
    const {nome, valor} = req.body;

    let query = `UPDATE produtos SET nome = '${nome}',
    valor = ${valor}
    WHERE id = ${req.params.id}`; //recebe id`


    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });

}

const remover = (req, res)=>{

    let query = `DELETE FROM produtos WHERE id= ${req.params.id}`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    remover
}
