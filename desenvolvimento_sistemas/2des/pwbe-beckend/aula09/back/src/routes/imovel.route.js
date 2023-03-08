const express = require("express");
const Imoveis = require("../controllers/imovel.controllers");
const router = express.Router();

router.get("/imoveis", Imoveis.listar);
router.get("/imoveis/:info", Imoveis.buscar);
router.post("/imovel", Imoveis.adicionar);
router.put("/imovel/:codigo/:status", Imoveis.alterarStatus); // put - fazer alteração

module.exports = router;