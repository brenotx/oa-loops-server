const Nivel = require("../models/nivel");

exports.addNivelStats = function(req, res, next) {
    const nivelId = req.body.nivelId;

    Nivel.findOne({ nivelId: nivelId }, function(err, nivel) {
        // TODO: You can test if the answer is correct fist and write a simpler code.
        if (nivel) {
            if (req.body.isAnswerCorrect) {
                nivel.correctAnwsers += 1;

                let flag = false;
                nivel.totalInstructions.find((item, index) => {
                    if (item.numInstructions === req.body.numInstructions) {
                        nivel.totalInstructions[index].numOccurrence += 1;
                        flag = true;
                    }
                });
                if (!flag) {
                    nivel.totalInstructions.push({ numInstructions: req.body.numInstructions, numOccurrence: 1 });
                }
            } else {
                nivel.wrongAnwsers += 1;
            }
        } else {
            nivel = new Nivel({
                nivelId: req.body.nivelId,
                correctAnwsers: req.body.isAnswerCorrect ? 1 : 0,
                wrongAnwsers: req.body.isAnswerCorrect ? 0 : 1,
                totalInstructions: [{ numInstructions: req.body.numInstructions, numOccurrence: 1 }]
            });
        }

        nivel.save(function(err) {
            if (err) {
                return next(err);
            }
            return res.send("succesfully saved");
        });
        if (err) return res.send(500, { error: err });
    });
};

exports.getNivelStats = function(req, res, next) {
    Nivel.find({}, function(err, nivelStats) {
        res.send(nivelStats);
    });
};
