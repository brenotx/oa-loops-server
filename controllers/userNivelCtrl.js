const UserNivel = require('../models/userNivel');

exports.setUserMaxNivel = function(req, res, next) {
    const user_id = req.body.user_id;

    const obj = req.body;
    delete obj._id;

    UserNivel.findOneAndUpdate({ user_id: user_id }, req.body, { upsert: true }, function(err, result){
        if (err) return res.send(500, { error: err });
        
        return res.send("Succesfully saved");
    });
};

// exports.getUserNivelStats = function(req, res, next) {
//     UserNivel.find({}, function (err, nivelStats) {
//         res.send(nivelStats);
//     });
// }
