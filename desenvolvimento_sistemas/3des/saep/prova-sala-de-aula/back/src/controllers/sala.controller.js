const con = require('../dao/connect');

const login = (req, res) => {
    const { email, senha } = req.body;
  
    let query = `SELECT * FROM professor WHERE professor.email = '${email}'`; //montando string

    con.query(query, (err, response) => {
        try{
            if (!err) {
    
                if (response.length > 0) {
                    if (response[0].senha == senha) {
                        res.status(202).end();
                    }else{
                        res.status(404).json(err).end();
                    }
                }
               
            }
        }catch{
            console.error(err);
            res.status(404).json(err).end();
        }
        
    });
}
const listar = (req, res) =>{
    const {email} = req.params; 

    let query = `SELECT professor.id, professor.nome AS "professor", professor.email, sala_aula.id AS "id_sala", sala_aula.nome AS "sala" FROM professor INNER JOIN sala_aula ON professor.id = sala_aula.professorid WHERE professor.email = '${email}'`;


    con.query(query, (err,response) => {
        if(err == undefined){
            res.status(200).json(response).end();
        }else{
            console.log(err)
            res.status(400).json(err).end();
        }
    })
}

const listaratividade = (req, res) =>{
    const {id} = req.params; 

    let query = `SELECT atividades.id, atividades.nome, atividades.descricao FROM atividades WHERE atividades.salaid = ${id}`;


    con.query(query, (err,response) => {
        if(err == undefined){
            console.log(response)
            res.status(200).json(response).end();
        }else{
            console.log(err)
            res.status(400).json(err).end();
        }
    })
}
const cadastrar = (req,res) =>{
    const {id, nome} = req.body;

    let query = `INSERT INTO sala_aula VALUES("", '${nome}', ${id})`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(202).json(response).end();
        }else{
            console.log(err)
            res.status(400).json(err).end();
        }
    });

}

const cadastraratividade = (req,res) =>{
    const {nome, descricao, id} = req.body;

    console.log(req.body)
    let query = `INSERT INTO atividades VALUES("", '${nome}','${descricao}', ${id})`;

    con.query(query, (err, response )=>{
        if(err == undefined){
            res.status(202).json(response).end();
        }else{
            console.log(err)
            res.status(400).json(err).end();
        }
    });

}

const remover = (req, res)=>{

    let query = `DELETE FROM sala_aula WHERE id= ${req.params.id}`;

  
    con.query(query, (err, response )=>{
        try{
            if(response.affectedRows == 1){
                res.status(202).json({status:202}).end();
            }else{
                console.log(err)
                res.status(400).json(err).end();
            }

        }catch{
            res.status(400).json(err).end();
                       
        }
    });
       
} 
 


module.exports = {
    login,
    listar,
    cadastrar, 
    remover,
    listaratividade,
    cadastraratividade
  
}

//200-deu certo 201 - criou  202- aceito 400-erro 404- não encontrado 500-erro mto grave- tabela http