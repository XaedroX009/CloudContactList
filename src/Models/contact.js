const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: {
        type: Number,
        requiered: true
    }
})