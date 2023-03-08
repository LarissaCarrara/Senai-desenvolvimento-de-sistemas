const express = require('express')
const cors = require('cors');
const router = require('./src/routes/routes')

const app = express();
app.use(express.json());
app.use('/',router);
app.use(cors());

app.listen(3000,()=>{
    console.log("Respondendo na porta 3000")
})