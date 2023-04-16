const con = require("../dao/connect");

const Funcionario = require('../model/bonificacao.model');


const cadastrar = (req,res) =>{
    const {matricula, nome_completo, admissao, salario, dataPagto, desempenho} = req.body;

    let query = `INSERT INTO paciente VALUES("", ${matricula} '${nome_completo}', '${admissao}', ${salario}, '${dataPagto}', ${desempenho} )`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });

}

const listar = (req,res) =>{

    let query = `SELECT * FROM funcionario`;

    con.query(query, (err, response )=>{
        if(err == undefined){

            let dados = [];

            for(let i=0; i<response.length; i++){
                let funcionario = new Funcionario(response[i]);
                
                let data = {
                    ...response[i],
                    bonificacao:funcionario.bonificacao()
                }
                dados.push(data);
               
            }


            res.status(201).json(dados).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

const alterar = (req, res)=>{
    
    const {nome_completo, admissao, salario, dataPagto, desempenho } = req.body;

    let query = `UPDATE paciente SET nome_completo = '${nome_completo}',
    admissao = '${admissao}',
    salario = ${salario},
    dataPagto = '${dataPagto}',
    desempenho = ${desempenho},
    WHERE matricula = ${req.params.matricula}`; //recebe matricula`


    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });

}

const remover = (req, res)=>{

    let query = `DELETE FROM funcionario WHERE id= ${req.params.matricula}`;

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
