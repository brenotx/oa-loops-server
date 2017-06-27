const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nivelSchema = new Schema({
    nivelId: { type: Number, unique: true },
    correctAnwsers: Number,
    wrongAnwsers: Number
    // totalInstructions: [{ numInstructions: Number, numOccurrence: Number }]
});

const Nivel = mongoose.model('Nivel', nivelSchema);

module.exports = Nivel;
