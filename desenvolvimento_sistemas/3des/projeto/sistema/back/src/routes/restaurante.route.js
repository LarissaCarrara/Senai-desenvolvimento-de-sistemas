const express = require("express");
const router = express.Router();

const restaurante = require('../controllers/restaurante.controller');


 router.post('/login', restaurante.login);
 router.get('/listar', restaurante.listar);
 router.get('/listar/:categoriaid', restaurante.filtrar);
 router.get('/listar/cardapio/:categoriaid', restaurante.listarCardapio);
 router.get('/categoria', restaurante.categoria);
 
// router.put('/update', restaurante.alterar);
// router.delete('/del/:id', restaurante.excluir);

module.exports = router