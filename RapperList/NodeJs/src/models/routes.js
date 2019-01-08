const express = require('express')
const routes = express.Router()

//CRUD no banco
const RapperController = require('../controllers/RapperController')

//Monstrar todos os rappers
routes.get('/rappers', RapperController.index)

module.exports = routes

