var LaboratorioSchema = require('./schemas/laboratorio-schema');

function save(laboratorio) {
    return new Promise((resolve, reject) => {

        const newLab = new LaboratorioSchema({
            nome: laboratorio.nome,
            endereco: laboratorio.endereco,
            status: laboratorio.status
        });

        newLab.save().then(_ => {
            resolve(findLaboratorioById(newLab._id))
        }).catch(err => reject(err));

    });

}

function findActiveLaboratorios() {
    return new Promise((resolve, reject) => {
        LaboratorioSchema
            .find({ status: 'ativo' })
            .then(labs => {
                resolve(labs)
            })
            .catch(err => reject(err))
    })
}

function update(labId, newData) {
    return new Promise((resolve, reject) => {
        LaboratorioSchema.updateOne({ _id: labId }, newData).then(updatedLab => {
            resolve(updatedLab)
        })
    })
}

function setInactive(labId) {
    return new Promise((resolve, reject) => {
        findLaboratorioById(labId).then(lab => {
            LaboratorioSchema.updateOne({ _id: labId }, ( { status: 'inativo' })).then(result => {
                resolve(result)
            })
        })
    })
}

function findLaboratorioById(id) {
    return new Promise((resolve, reject) => {
        LaboratorioSchema
            .findOne({ _id: id })
            .then(laboratorio => { resolve(laboratorio) })
            .catch(err => reject(err))
    })
}

module.exports = {
    save: save,
    update: update,
    setInactive: setInactive,
    findActiveLaboratorios: findActiveLaboratorios
}
