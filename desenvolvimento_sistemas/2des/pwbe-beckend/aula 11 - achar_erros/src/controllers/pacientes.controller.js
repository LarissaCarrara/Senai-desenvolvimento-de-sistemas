const con = require("../dao/connection");

const cadastrar = (req, res) => {
    let data = req.body;
    console.log(data);
    const query = `INSERT INTO pacientes VALUES (DEFAULT, '${data.nome}', '${data.nascimento}')`;

    con.query(query, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).json({
                error: "Erro ao cadastrar paciente"
            }).end();
        }else {
            data.id = result.insertId;
            
            res.status(200).json(data).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM pacientes`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao listar pacientes"
            }).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

module.exports = {
    cadastrar,
    listar
}