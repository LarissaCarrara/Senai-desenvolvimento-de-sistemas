const express = require("express");
const router = express.Router();

const loja = require('../controllers/venda.controller');


router.post('/NovaVenda', loja.cadastrar);
router.get('/listarVenda', loja.listar);
router.get('/listarTodaVenda', loja.listarTudo);
router.get('/somavendas', loja.Somavenda);
router.put("/alterarVenda/:id", loja.alterar);
router.delete("/removeVenda/:id", loja.remover);


module.exports = router