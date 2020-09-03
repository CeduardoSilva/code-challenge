const mongoose = require('mongoose');

const ExameSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    tipo: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    }
})

const Exame = mongoose.model('Exame', ExameSchema);

module.exports = Exame;