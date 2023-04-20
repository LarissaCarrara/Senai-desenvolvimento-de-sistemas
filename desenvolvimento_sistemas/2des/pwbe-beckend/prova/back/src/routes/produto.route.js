const express = require("express");
const router = express.Router();

const loja = require('../controllers/produto.controller');


router.post('/NovaProduto', loja.cadastrar);
router.get('/listarProduto', loja.listar);
router.put("/alterarProduto/:id", loja.alterar);
router.delete("/removeProduto/:id", loja.remover);


module.exports = router