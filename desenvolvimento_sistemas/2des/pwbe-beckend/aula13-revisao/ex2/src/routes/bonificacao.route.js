const express = require("express");

const router = express.Router();
const Bonificacao = require("../controllers/bonificacao.controller");

router.post("/nova", Bonificacao.cadastrar);
router.get("/listar", Bonificacao.listar);
router.put("/alterar/:matricula", Bonificacao.alterar);
router.delete("/remove/:matricula", Bonificacao.remover);

module.exports = router;