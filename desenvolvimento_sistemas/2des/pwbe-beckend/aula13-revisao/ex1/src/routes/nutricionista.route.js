const express = require("express");

const router = express.Router();
const Nutri = require("../controllers/nutricionista.controller");

router.post("/nova", Nutri.cadastrar);
router.get("/pacientes", Nutri.listar);
router.put("/alterar/:id", Nutri.alterar);
router.delete("/remove/:id", Nutri.remover);

module.exports = router;