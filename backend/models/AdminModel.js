const { Schema, model } = require('../connection')

const competitionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    prize: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
})

module.exports = model('admin', competitionSchema)