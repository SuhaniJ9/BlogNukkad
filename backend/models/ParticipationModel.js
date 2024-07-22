const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    blog: { type: Types.ObjectId, ref: 'blog' },
    user: { type: Types.ObjectId, ref: 'user' },
    competition: { type: Types.ObjectId, ref: 'competition' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('participation', mySchema);