const express = require("express");
const cors = require("cors"); //segurança do back

const routes = require("./src/routes/bonificacao.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3000, ()=>{
    console.log("rodando");
})