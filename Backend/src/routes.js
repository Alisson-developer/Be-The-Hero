const { Router } = require('express')

const OngController = require('./Controller/OngController')
const IncidentController = require('./Controller/IncidentController')
const ProfileController = require('./Controller/ProfileController')
const SessionController = require('./Controller/SessionController')

const routes = Router()

routes.post('/sessions', SessionController.store)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profiles', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.destroy)

module.exports = routes