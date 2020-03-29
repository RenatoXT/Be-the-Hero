const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors({}))
app.use(express.json())
app.use(routes)
app.use(errors())


app.listen(3333)

//Realizar testes: 
//module.exports = app  //Comentar a linha 14 e alterar o package.json para rodar o server.js ao invés deste mod.
