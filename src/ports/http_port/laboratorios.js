let laboratoriosDB = require('../../data-access/laboratorios')

let laboratorios = module.exports = {}

laboratorios.getAllActives = (req, res, next) => {
    laboratoriosDB.findActiveLaboratorios()
        .then(data => {
            res.send(data)
        })
}

laboratorios.getLaboratorioById = (req, res, next) => {
    laboratoriosDB.findLaboratorioById(req.params.id)
        .then(data => {
            res.send(data)
        })
}

laboratorios.create = (req, res, next) => {
    laboratoriosDB.save(req.body)
        .then(data => {
            res.send(data)
        })
}

laboratorios.update = (req, res, next) => {
    laboratoriosDB.update(req.params.id, req.body)
        .then(data => {
            res.send(data)
        })
        .catch(next)
}

laboratorios.remove = (req, res, next) => {
    laboratoriosDB.setInactive(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(next)
}