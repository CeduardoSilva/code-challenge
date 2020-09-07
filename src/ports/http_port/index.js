const express = require('express')
const router = express.Router()

const exames = require('./exames')
const laboratorios = require('./laboratorios')

router
  .get('/exames', exames.getAllActives) //OK
  .get('/exames/:id', exames.getExameById) //OK
  .post('/exames', exames.create) //OK
  .put('/exames/:id', exames.update) //OK
  .delete('/exames/:id', exames.remove) //OK
  .post('/exames/associate/:id', exames.associate)
  .post('/exames/disassociate/:id', exames.disassociate)

router
  .get('/laboratorios', laboratorios.getAllActives)
  .get('/laboratorios/:id', laboratorios.getLaboratorioById)
  .post('/laboratorios', laboratorios.create)
  .put('/laboratorios/:id', laboratorios.update)
  .delete('/laboratorios/:id', laboratorios.remove)

module.exports = router