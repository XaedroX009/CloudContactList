const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required:true
    }
})


module.exports = mongoose.model("Contacts", contactSchema)