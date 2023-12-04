const express = require("express");
const router = express.Router();

const sala = require('../controllers/sala.controller');


router.post('/login', sala.login);
router.get('/listar/:email', sala.listar);
router.post('/cadastrar', sala.cadastrar);
router.delete('/remover/:id', sala.remover);
router.get('/listaratividade/:id', sala.listaratividade);
router.post('/cadastraratividade', sala.cadastraratividade);
//  router.get('/listar/:categoriaid', sala.filtrar);
//  router.get('/listar/cardapio/:categoriaid', sala.listarCardapio);
//  router.get('/categoria', sala.categoria);
 
// router.put('/update', restaurante.alterar);
// router.delete('/del/:id', restaurante.excluir);

module.exports = router