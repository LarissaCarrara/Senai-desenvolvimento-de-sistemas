const con = require("../dao/connect");

const Paciente = require('../model/paciente.model');


const cadastrar = (req,res) =>{
    const {nome_completo, nascimento, peso, altura} = req.body;

    let query = `INSERT INTO paciente VALUES("", '${nome_completo}', '${nascimento}', ${peso}, ${altura})`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });

}

const listar = (req,res) =>{

    let query = `SELECT * FROM paciente`;

    con.query(query, (err, response )=>{
        if(err == undefined){

            let dados = [];

            for(let i=0; i<response.length; i++){
                let paciente = new Paciente(response[i]);
                
                let data = {
                    ...response[i],
                    idade:paciente.CalcIdade(),
                    imc: paciente.CalcImc(),
                    diagnostico: paciente.Diagnostico()
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
    
    const {nome_completo, nascimento, peso, altura} = req.body;

    let query = `UPDATE paciente SET nome_completo = '${nome_completo}',
    nascimento = '${nascimento}',
    peso = ${peso},
    altura = ${altura}
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

    let query = `DELETE FROM paciente WHERE id= ${req.params.id}`;

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
