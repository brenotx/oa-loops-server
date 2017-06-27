const Nivel = require('../models/nivel');

exports.addNivelStats = function(req, res, next) {
    const nivelId = req.body.nivelId;
    // const correctAnwsers = req.body.correctAnwsers;
    // const wrongAnwsers = req.body.wrongAnwsers;

    // const query = { 'nivelId': nivelId };
    
    // const nivel = new Nivel({
    //     nivelId: nivelId,
    //     correctAnwsers: correctAnwsers,
    //     wrongAnwsers: wrongAnwsers
    //     // totalInstructions: [{ numInstructions: Number, numOccurrence: Number }]
    // });

    const obj = req.body;
    // const id = obj._id;
    delete obj._id;

    Nivel.findOneAndUpdate({ nivelId: nivelId }, req.body, { upsert: true }, function(err, result){
        if (err) return res.send(500, { error: err });
        
        return res.send("succesfully saved");
    });
}

exports.getNivelStats = function(req, res, next) {
    Nivel.find({}, function (err, nivelStats) {
        res.send(nivelStats);
    });
}