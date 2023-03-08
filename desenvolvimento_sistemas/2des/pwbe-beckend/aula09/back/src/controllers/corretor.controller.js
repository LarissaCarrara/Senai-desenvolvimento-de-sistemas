//funcao e processamento

const con = require("../dao/connect");
const adicionar = (req, res) =>{
    const { nome, matricula, senha, salario } = req.body;

    let query = `INSERT INTO corretores VALUES ("",'${nome}','${matricula}', '${senha}', ${salario})`; //montando string

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(201).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    });
}

const listar = (req, res) =>{
    const query = "SELECT * FROM corretores";
    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            let {sqlMessage, sqlState} = err;
            res.status(400).json({sqlMessage, sqlState}).end();
        }
    })
}

const autenticar = (req,res) => {
    const {matricula,senha} = req.body; //recebendo os dados
    let query = `SELECT * FROM corretores WHERE matricula = '${matricula}' AND senha = '${senha}'`;
    con.query(query, (err, response) => {
        if(err == undefined){
            if(response.length == 0){
                res.status(401).json({"msg": "Matrícula ou Senha inválida"}).end();
            }else{

                let corretor = response[0]; //transformar em um vetor simples
    
                delete corretor.senha; //apagando a senha, pois é um dado sensivel 
                res.status(200).json(corretor).end();
            }
        
        }else{
            res.status(401).json(err).end();
        }
    })
}

module.exports = {
    adicionar,
    listar,
    autenticar
}

