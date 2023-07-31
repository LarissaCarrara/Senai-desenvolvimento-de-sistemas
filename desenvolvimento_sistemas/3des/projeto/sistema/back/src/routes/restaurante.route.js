const express = require("express");
const router = express.Router();

const restaurante = require('../controllers/restaurante.controller');


 router.post('/login', restaurante.login);
 router.get('/cadastrar', restaurante.cadastrar);

// router.post('/login', (req, res)=> {res.send('testando')})
 router.get('/listar', restaurante.listar);
 router.get('/listar/:categoriaid', restaurante.filtrar);
 router.get('/listar/cardapio/:categoriaid', restaurante.listarCardapio);
 
// router.put('/update', restaurante.alterar);
// router.delete('/del/:id', restaurante.excluir);

module.exports = router