const express = require('express')
const routes = express.Router()

//CRUD no banco
const RapperController = require('../controllers/RapperController')

//Monstrar todos os rappers paginados
routes.get('/rappers', RapperController.index)

//Get de um rapper especifico pelo id
routes.get('/rappers/:id', RapperController.show)

//Criar um rapper
routes.post('/rappers', RapperController.create)

//Update
routes.put('/rappers/:id', RapperController.update)

//Delete
routes.delete('/rappers/:id', RapperController.destroy)

module.exports = routes

