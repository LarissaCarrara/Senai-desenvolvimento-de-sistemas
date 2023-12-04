//config padrao
const express = require("express");
const cors = require("cors"); //segurança do back

const sala = require("./src/routes/sala.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use(sala);

app.listen(3000, ()=>{
    console.log("rodando");
})