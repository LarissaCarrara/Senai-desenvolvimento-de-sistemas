const con = require ('../dao/connect');
const Venda = require('../model/venda.model');

const cadastrar = (req,res) =>{
    const {data, quantidade, produtoid,vendedorid} = req.body;

    let query = `INSERT INTO vendas VALUES("", '${data}', ${quantidade}, ${produtoid}, ${vendedorid})`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });

}


const listar = (req,res) =>{

    let query = `SELECT vendas.data, produtos.nome , vendedores.nome as vendedor FROM vendas INNER JOIN produtos ON vendas.produtoid = produtos.id INNER JOIN vendedores ON vendas.vendedorid = vendedores.id`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            console.log(response);
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

const listarTudo = (req,res) =>{

    let query = `SELECT * from vendas`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            console.log(response);
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}


const alterar = (req, res)=>{
    
    const {data, quantidade, produtoid,vendedorid} = req.body;

    let query = `UPDATE vendas SET data = '${data}',
    quantidade = ${quantidade},
    produtoid = ${produtoid},
    vendedorid = ${vendedorid}
    WHERE id = ${req.params.id}`; //recebe id`


    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });

}

const Somavenda = (req,res) =>{

    let query = `SELECT * from vendas INNER JOIN produtos ON vendas.produtoid = produtos.id`;

    con.query(query, (err, response )=>{
        if(err == undefined){

            console.log(response);
            let dados = [];

            for(let i=0; i<response.length; i++){
                let venda = new Venda(response[i]);
                
                let data = {
                    total:venda.quantidade*venda.valor,
                }
                dados.push(data);
            }
            let total = 0
            dados.forEach((valor)=> {
                total += valor.total
            })
            

            res.status(201).json({valorTotal:total}).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}


const remover = (req, res)=>{

    let query = `DELETE FROM vendas WHERE id= ${req.params.id}`;

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
    listarTudo,
    alterar,
    remover,
    Somavenda
}
