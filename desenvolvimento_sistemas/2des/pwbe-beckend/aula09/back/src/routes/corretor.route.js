const express = require("express");

const router = express.Router();
const Corretor = require("../controllers/corretor.controller");

router.post("/corretor", Corretor.adicionar); //post = mandando
router.get("/corretores", Corretor.listar); //get = chamando
router.post("/login", Corretor.autenticar);
module.exports = router;