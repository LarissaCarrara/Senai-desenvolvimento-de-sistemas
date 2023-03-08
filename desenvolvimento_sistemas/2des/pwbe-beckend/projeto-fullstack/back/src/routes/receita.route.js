const express = require("express");

const router = express.Router();
const Receita = require("../controllers/receita.controller");

router.post("/novareceita", Receita.adicionar);
router.get("/receitas", Receita.listar);
router.get("/umareceita", Receita.listaruma);
router.get("/alterar/:id", Receita.alterar);
router.get("/remove/:id", Receita.remover);

module.exports = router;