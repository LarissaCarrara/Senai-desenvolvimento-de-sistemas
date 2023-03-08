//config padrao
const express = require("express");
const cors = require("cors"); //segurança do back

const receitaRoutes = require("./src/routes/receita.route")
const app = express();

app.use(cors());
app.use(express.json());

app.use(receitaRoutes);

app.listen(3000, ()=>{
    console.log("rodando");
})