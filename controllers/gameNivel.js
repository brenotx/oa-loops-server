const GameNivel = require('../models/gameNivel');

exports.addGameNivelStats = function(req, res, next) {
    const gameNivelId = req.body.id;

    // const gameNivel = new GameNivel(req.body);
    // gameNivel.save(function(err) {
    //     if (err) { return next(err); }

    //     return res.send("succesfully saved");
    // });

    const obj = req.body;
    // const id = obj._id;
    delete obj._id;

    GameNivel.findOneAndUpdate({ gameNivelId: gameNivelId }, req.body, { upsert: true }, function(err, result){
        if (err) return res.send(500, { error: err });
        
        return res.send("succesfully saved");
    });
}

exports.getGameNivelStats = function(req, res, next) {
    GameNivel.find({}, function (err, nivelStats) {
        res.send(nivelStats);
    });
}