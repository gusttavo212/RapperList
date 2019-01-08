const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')


//Iniciando o app
const app = express()
//Permitir o envio de json
app.use(express.json())
//Tornar a API publica
app.use(cors())


//Iniciando o DB
mongoose.connect('mongodb://gadsden:250433@localhost/rapperlist?authSource=admin&w=1', { useNewUrlParser: true })
//Modulo require-dir do npm que é usado para faser o require de um diretorio inteiro
requireDir('./src/models')


//Primeira rota
//toda vez que receber uma rota de api mande para routes
//Leva para o routes exportado
app.use('/api', require('./src/models/routes'))

app.listen(3001)//Escutar a porta 3001
console.log('Servidor rodando na porta 3001')

