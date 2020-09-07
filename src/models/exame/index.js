let Exame = require('./exame')

function createExame(exameData) {
    try {

        let newExame = new Exame({
            nome: exameData.nome,
            tipo: exameData.tipo,
            laboratorios: exameData.laboratorios
        })
    
        return newExame

    } catch(err) {
        return err
    }
}

module.exports = {
    createExame: createExame
}