let Exame = require('./exame')

function createExame(exameData) {

    let newExame = new Exame({
        nome: exameData.nome,
        tipo: exameData.tipo,
        laboratorios: exameData.laboratorios
    })

    return newExame
}

module.exports = {
    createExame: createExame
}