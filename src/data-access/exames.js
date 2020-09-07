var Exame = require('../models/exame/index');
var ExameSchema = require('./schemas/exame-schema');

function save(reqBody) {
    return new Promise((resolve, reject) => {

        let exame = Exame.createExame(reqBody)

        const newExame = new ExameSchema({
            nome: exame.nome,
            tipo: exame.tipo,
            laboratorios: exame.laboratorios,
            status: exame.status
        });
    
        newExame.save().then(_ => {
            resolve(newExame._id)
        }).catch(err => reject(err));

    });
}

function findActiveExames() {
    return new Promise((resolve, reject) => {
        ExameSchema
            .find({ status: 'ativo' })
            .then(exames => {
                resolve(exames)
            })
            .catch(err => reject(err))
    })
}

function update(exameId, newData) {
    return new Promise((resolve, reject) => {
        console.log(`Looking for ${exameId}`)
        ExameSchema.updateOne({ _id: exameId }, newData).then(updatedExame => {
            resolve(updatedExame)
        }).catch(err => {
            resolve(err)
        })
    })
}

function setInactive(exameId) {
    return new Promise((resolve, reject) => {
        findExameById(exameId).then( _ => {
            ExameSchema.updateOne({ _id: exameId }, ( { status: 'inativo' })).then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        }).catch(err => {
            reject(err)
        })
    })
}

function associate(exameId, activeLabId) {
    return new Promise((resolve, reject) => {
        findExameById(exameId).then( exame => {
            var labs = exame.laboratorios
            labs.push(activeLabId)
            ExameSchema.updateOne({ _id: exameId }, ( { laboratorios: labs })).then(result => {
                resolve(result)
            })
        })
    })
}

function disassociate(exameId, activeLabId) {
    return new Promise((resolve, reject) => {
        findExameById(exameId).then( exame => {
            var labs = exame.laboratorios
            labs = labs.filter((lab) => { return lab != activeLabId});
            ExameSchema.updateOne({ _id: exameId }, ( { laboratorios: labs })).then(result => {
                findExameById(exameId).then( exame => {
                    resolve(result)
                })
            })
        })
    })
}

function findExameById(id) {
    return new Promise((resolve, reject) => {
        ExameSchema
            .findOne({ _id: id })
            .then(exame => {
                resolve(exame) 
            })
            .catch(err => reject(err))
    })
}

module.exports = {
    save: save,
    findActiveExames: findActiveExames,
    findExameById: findExameById,
    update: update,
    setInactive: setInactive,
    associate: associate,
    disassociate: disassociate
}