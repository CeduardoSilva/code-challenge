let Laboratorio = require('./laboratorio')

function createLaboratorio(labData) {

    let newLab = new Laboratorio({
        nome: labData.nome,
        endereco: labData.endereco,
        status: labData.status
    })

    return newLab
}

module.exports = {
    createLaboratorio: createLaboratorio
}