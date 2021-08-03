const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    idContacto:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("ContactEmails", emailSchema);
