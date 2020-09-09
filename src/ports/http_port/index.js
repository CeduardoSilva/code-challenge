const express = require('express')
const router = express.Router()

const exames = require('./exames')
const laboratorios = require('./laboratorios')

router
  .get('/exames', exames.getAllActives)
  .get('/exames/:id', exames.getExameById)
  .post('/exames', exames.create)
  .put('/exames/:id', exames.update) 
  .delete('/exames/:id', exames.remove)
  .post('/exames/associate/:id', exames.associate)
  .post('/exames/disassociate/:id', exames.disassociate)

router
  .get('/laboratorios', laboratorios.getAllActives)
  .get('/laboratorios/:id', laboratorios.getLaboratorioById)
  .post('/laboratorios', laboratorios.create)
  .put('/laboratorios/:id', laboratorios.update)
  .delete('/laboratorios/:id', laboratorios.remove)

module.exports = router