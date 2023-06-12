//config padrao
const express = require("express");
const cors = require("cors"); //segurança do back

const Router = require("./route");
const app = express();

app.use(cors());
app.use(express.json());

app.use(Router);

app.listen(3000, ()=>{
    console.log("rodando");
})