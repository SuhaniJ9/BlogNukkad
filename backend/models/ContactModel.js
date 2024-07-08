const { Schema, model } = require('../connection')

const contactSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = model('contact', contactSchema)