const con = require ('../dao/connect');
const Vendedor = require('../model/vendedor.model');

const cadastrar = (req,res) =>{
    const {nome, matricula} = req.body;

    let query = `INSERT INTO vendedores VALUES("", '${nome}', ${matricula})`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });

}

const listar = (req,res) =>{

    let query = `SELECT * from vendedores`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            console.log(response);
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}


const listarQuemVendeu = (req,res) =>{

    let query = `SELECT vendas.quantidade, produtos.valor , vendedores.matricula, vendedores.nome, vendedores.id FROM vendas INNER JOIN produtos ON vendas.produtoid = produtos.id INNER JOIN vendedores ON vendas.vendedorid = vendedores.id`;

    con.query(query, (err, response )=>{
        if(err == undefined){

            console.log(response);
            let dados = [];

            for(let i=0; i<response.length; i++){
                let vendedor = new Vendedor(response[i]);
                
                let data = {
                    id:vendedor.id,
                    matricula: vendedor.matricula,
                    nome: vendedor.nome,
                    total:vendedor.VendaTotal(),
                    comissao: vendedor.Comissao()
                }

                dados.push(data);
               console.log(data);
            }


            res.status(201).json(dados).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}



const alterar = (req, res)=>{
    
    const {nome, matricula} = req.body;

    let query = `UPDATE vendedores SET nome = '${nome}',
    matricula = ${matricula}
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

    let query = `DELETE FROM vendedores WHERE id= ${req.params.id}`;

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
    listarQuemVendeu,
    alterar,
    remover
}
