const express = require('express')

const router = require('./src/routes/routes')

const app = express()
app.use(express.json())
app.use('/',router)

app.listen(3001,()=>{
    console.log("BackEnd Ativo.")
})