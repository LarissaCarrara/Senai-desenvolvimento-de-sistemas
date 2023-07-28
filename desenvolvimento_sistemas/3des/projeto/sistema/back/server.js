//config padrao
const express = require("express");
const cors = require("cors"); //segurança do back

const Router_Restaurante = require("./src/routes/restaurante.route");
const app = express();

app.use(express.json());
app.use(cors());

app.use(Router_Restaurante);

app.listen(3000, ()=>{
    console.log("rodando");
})