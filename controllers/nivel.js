const Nivel = require('../models/nivel');

exports.addNivelStats = function(req, res, next) {
    const nivelId = req.body.nivelId;

    Nivel.findOne({ nivelId: nivelId }, function(err, nivel) {
        if (nivel) {
            nivel.correctAnwsers = req.body.correctAnwsers;
            nivel.wrongAnwsers = req.body.wrongAnwsers;

            let flag = false;
            nivel.totalInstructions.find((item, index) => {
                if (item.numInstructions === req.body.totalInstructions[0].numInstructions) {
                    nivel.totalInstructions[index] = req.body.totalInstructions[0];
                    flag = true;
                }
            });
            if (!flag) {
                nivel.totalInstructions.push(req.body.totalInstructions[0]);
            }
        } else {
            nivel = new Nivel({
                nivelId: req.body.nivelId,
                correctAnwsers: req.body.correctAnwsers,
                wrongAnwsers: req.body.wrongAnwsers,
                totalInstructions: req.body.totalInstructions
            });
        }

        nivel.save(function(err) {
            if (err) {
                return next(err);
            }
            return res.send('succesfully saved');
        });
        if (err) return res.send(500, { error: err });
    });
};

exports.getNivelStats = function(req, res, next) {
    Nivel.find({}, function(err, nivelStats) {
        res.send(nivelStats);
    });
};
