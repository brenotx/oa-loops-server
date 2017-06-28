const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const statsSchema = new Schema({
//     correctAnwsers: { type: Number, default: 0 },
//     wrongAnwsers: { type: Number, default: 0 }
// });

const gameNivelSchema = new Schema({
    gameNivelId: { type: Number, unique: true },
    path: [],
    instructions: [{
        type: String,
        enum: [ "up", "down", "right", "left" ]
    }],
    stats: {
        correctAnwsers: { type: Number, default: 0 },
        wrongAnwsers: { type: Number, default: 0 }
    }

    // totalInstructions: [{ numInstructions: Number, numOccurrence: Number }]
});

const GameNivel = mongoose.model('GameNivel', gameNivelSchema);

module.exports = GameNivel;
