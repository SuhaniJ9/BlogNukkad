const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user' },
    title: String,
    category: String,
    cover: String,
    description: String,
    tags: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('blog', mySchema);