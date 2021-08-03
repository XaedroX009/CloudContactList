const mongoose = require('mongoose');

const directionSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    direccion1: {
        type: String,
        required: true
    },
    direccion2:{
        type: String
    },
    direccion3:{
        type: String
    },
    pais:{
        type: String,
        required: true
    },
    idContacto:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("ContactDirections")