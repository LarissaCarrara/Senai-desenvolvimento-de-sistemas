const express = require("express");
const router = express.Router();

const loja = require('../controllers/vendedor.controller');


router.post('/nova', loja.cadastrar);
router.get('/listar', loja.listar);
router.put("/alterar/:id", loja.alterar);
router.delete("/remove/:id", loja.remover);


module.exports = router