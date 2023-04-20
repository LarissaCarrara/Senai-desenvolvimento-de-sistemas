//config padrao
const express = require("express");
const cors = require("cors"); //segurança do back

const Router = require("./src/routes/vendedor.route");
const RouterProduto = require("./src/routes/produto.route");
const RouterVenda = require("./src/routes/venda.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use(Router);
app.use(RouterProduto);
app.use(RouterVenda);

app.listen(3000, ()=>{
    console.log("rodando");
})