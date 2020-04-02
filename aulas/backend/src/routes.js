const express = require('express')
//const crypto = require('crypto') //gerar id

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const connection =require('./database/connection')// para fazer operações com o banco de dados
const routes = express.Router();

routes.get('/ongs', OngController.index);//modularizado em OngController
routes.post('/ongs', OngController.create);//modularizado em OngController

routes.get('/incidents', IncidentController.index);//modularizado em IncidentControler
routes.post('/incidents',IncidentController.create)//modularizado em IncidentControler
routes.delete('/incidents/:id',IncidentController.delete)

module.exports = routes