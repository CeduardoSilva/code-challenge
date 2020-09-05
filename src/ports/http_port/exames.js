let examesDB = require('../../data-access/exames')

let exames = module.exports = {}

exames.getAllActives = (req, res, next) => {
    examesDB.findActiveExames()
        .then(data => {
            res.send(data)
        })
}

exames.getExameById= (req, res, next) => {
    examesDB.findExameById(req.params.id)
        .then(data => {
            res.send(data)
        })
}

exames.create = (req, res, next) => {
    examesDB.save(req.body)
        .then(data => {
            res.send(data)
        })
}

exames.update = (req, res, next) => {
    examesDB.update(req.params.id, req.body)
        .then(data => {
            res.send(data)
        })
        .catch(next)
}

exames.remove = (req, res, next) => {
    examesDB.setInactive(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(next)
}

exames.associate = (req, res, next) => {
    examesDB.associate(req.params.id, req.body.laboratorioId)
        .then(data => {
            res.send(data)
        })
        .catch(next)
}

exames.disassociate = (req, res, next) => {
    examesDB.disassociate(req.params.id, req.body.laboratorioId)
        .then(data => {
            res.send(data)
        })
        .catch(next)
}