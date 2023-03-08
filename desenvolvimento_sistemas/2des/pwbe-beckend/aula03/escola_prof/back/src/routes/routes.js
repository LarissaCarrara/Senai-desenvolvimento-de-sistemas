const express = require("express");
const router = express.Router();

const Alunos = require('../controllers/alunos');

router.get('/', Alunos.teste);
router.get('/alunos', Alunos.listar);
router.get('/create', Alunos.cadastrar);

module.exports = router