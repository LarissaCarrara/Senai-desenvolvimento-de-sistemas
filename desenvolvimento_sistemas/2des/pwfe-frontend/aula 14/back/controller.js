const con = require("./dao/connect");

const login = (req, res) => {
  const { email, senha } = req.body;
  console.log(req.body);
  let query = `SELECT * FROM usuario WHERE usuario.email = '${email}' AND usuario.senha = password('${senha}')`; //montando string

  con.query(query, (err, response) => {
    try {
      if (response.length > 0) {
        res
          .status(202)
          .json({
            message: "Sucesso ao fazer login!",
            success: true,
            error: false,
            usuario: response,
          })
          .end();
      } else {
        throw new Error("Usuario nao encontrado");
      }
    } catch (err) {
      res.status(404).json({
        message: err,
        success: false,
        error: true,
      });
    }
  });
};

const alterar = (req, res) => {
  const { nome, cpf, email, senha, nascimento, cep, numero, complemento } =
    req.body;

  let query = `UPDATE usuario SET nome = '${nome}',
    cpf = '${cpf}',
    email = '${email}',
    senha = password('${senha}'),
    nascimento = '${nascimento}',
    cep = '${cep}',
    numero = '${numero}',
    complemento = '${complemento}'
    WHERE id = ${req.params.id}`; //recebe id

  con.query(query, (err, response) => {
    //manda e retorna uma resposta
    if (err == undefined) {
      res.status(200).json(response).end();
    } else {
      res.status(400).json(err).end();
    }
  });
};

const remover = (req, res) => {
  let query = `DELETE FROM usuario WHERE id = ${req.params.id}`;

  con.query(query, (err, response) => {
    if (err == undefined) {
      res.status(200).json(response).end();
    } else {
      res.status(400).json(err).end();
    }
  });
};

const buscar = (req, res) => {
  let query = `SELECT * FROM usuario WHERE id = ${req.params.id}`;

  con.query(query, (err, response) => {
    if (err == undefined) {
      res.status(200).json(response).end();
    } else {
      res.status(400).json(err).end();
    }
  });
};

module.exports = {
  login,
  alterar,
  remover,
  buscar,
};

//200-deu certo 201 - criou  202- aceito 400-erro 404- não encontrado 500-erro mto grave- tabela http
