const express = require('express')
//const crypto = require('crypto') //gerar id

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/ongs', OngController.index);//modularizado em OngController
routes.post('/ongs', OngController.create);//modularizado em OngController
 
routes.get('/profile', ProfileController.index);//modularizado em ProfileController


routes.get('/incidents', IncidentController.index);//modularizado em IncidentControler
routes.post('/incidents',IncidentController.create)//modularizado em IncidentControler
routes.delete('/incidents/:id',IncidentController.delete)

routes.post('/sessions',SessionController.create)//sessao de login modularizado em SessionController

module.exports = routes