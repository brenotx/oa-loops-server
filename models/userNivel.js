const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userNivelSchema = Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
    maxNivel: Number
});

const ModelClass = mongoose.model('UserNivel', userNivelSchema);

module.exports = ModelClass;