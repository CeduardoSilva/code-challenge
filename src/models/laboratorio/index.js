let Laboratorio = require('./laboratorio')

function createLaboratorio(labData) {
    try {

        let newLab = new Laboratorio({
            nome: labData.nome,
            endereco: labData.endereco,
            status: labData.status
        })
    
        return newLab

    } catch(err) {
        return err
    }
}

module.exports = {
    createLaboratorio: createLaboratorio
}