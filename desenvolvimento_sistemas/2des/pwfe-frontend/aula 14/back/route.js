const express = require("express");
const router = express.Router();

const usuario = require('./controller');



 router.post('/login', usuario.login);
 router.get('/buscar/:id', usuario.buscar);
 router.put('/alterar/:id', usuario.alterar);
 router.delete('/remover', usuario.remover);
 
// router.put('/update', usuario.alterar);
// router.delete('/del/:id', usuario.excluir);

module.exports = router