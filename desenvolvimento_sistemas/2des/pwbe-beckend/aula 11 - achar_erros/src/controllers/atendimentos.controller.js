const con = require("../dao/connection");

const cadastrar = (req, res) => {
    let data = req.body;
   console.log(data);

    const query = `INSERT INTO atendimentos VALUES ("", '${data.data}', ${data.medico_id}, ${data.paciente_id})`;

   con.query(query, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).json({
                error: "Erro ao cadastrar atendimento"
        
            }).end();
        }else {
            data.id = result.insertId;
            
            res.status(200).json(data).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM atendimentos`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao listar atendimentos"
            }).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

const alterar = (req, res) => {
    const { data } = req.body;
    console.log(data);
    const { id } = req.params;
    console.log(id);
    const query = `UPDATE atendimentos SET data = '${data}' WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao alterar atendimento"
            }).end();
        }else {
            res.status(200).json({
                message: "Atendimento alterado com sucesso"
            }).end();
        }
    });
}

const remover = (req, res) => {

    const { id } = req.params;

    const query = `DELETE FROM atendimentos WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).json({
                error: "Erro ao alterar atendimento"
            }).end();
        }else {
            res.status(500).json({
                message: "Atendimento removido com sucesso"
            }).end();
        }
    });
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    remover
}