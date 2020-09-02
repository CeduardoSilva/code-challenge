const mongoose = require('mongoose');

const LaboratorioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    endereco: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    }
})

const Laboratorio = mongoose.model('Laboratorio', LaboratorioSchema);

module.exports = Laboratorio;