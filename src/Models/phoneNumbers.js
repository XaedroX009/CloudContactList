const mongoose = require('mongoose');

const phoneNumber = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    tipoNumero: {
        type: String
    },
    idContacto: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("ContactPhones", phoneNumber);