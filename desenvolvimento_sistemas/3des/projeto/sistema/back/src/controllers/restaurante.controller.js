const con = require('../dao/connect');


const bcrypt = require('bcrypt');
const saltRounds = 10; // Define o número de salt rounds (geralmente 10 é um bom valor)

const cadastrar = (req, res) => {
    const { cpf, nome, email, senha, logradouro, bairro } = req.body;

    // Criptografa a senha usando bcrypt
    bcrypt.hash(senha, saltRounds, (err, hash) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao criptografar a senha.' }).end();
        } else {
            const query = 'INSERT INTO cliente (cpf, nome, email, senha, logradouro, bairro) VALUES (?, ?, ?, ?, ?, ?)';
            const values = [cpf, nome, email, hash, logradouro, bairro];

            con.query(query, values, (err, response) => {
                if (err) {
                    res.status(400).json(err).end();
                } else {
                    res.status(200).json(response).end();
                }
            });
        }
    });
};


const login = (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM cliente WHERE email = ?';

    con.query(query, [email], (err, rows) => {
        if (err || rows.length === 0) {
            res.status(400).json({
                error: true,
                log: err || 'Usuário não encontrado.'
            }).end();
        } else {
            const hash = rows[0].senha;

            bcrypt.compare(senha, hash, (compareErr, isMatch) => {
                if (compareErr || !isMatch) {
                    res.status(400).json({
                        error: true,
                        log: 'Credenciais inválidas.'
                    }).end();
                } else {
                    res.status(200).json({
                        success: true
                    }).end();
                }
            });
        }
    });
};

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