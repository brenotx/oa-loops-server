let ObjectId = require('mongoose').Types.ObjectId;

const UserNivel = require('../models/userNivel');

exports.setUserMaxNivel = function(req, res, next) {
    const user_id = req.body.user_id;

    // const obj = req.body;
    // delete obj._id;

    UserNivel.findOne({ user_id: user_id }, function(err, userNivel) {
        if (req.body.maxNivel > userNivel.maxNivel) {
            userNivel.maxNivel = req.body.maxNivel;
            userNivel.save(function(err) {
                if (err) {
                    return next(err);
                }
                return res.send('Succesfully updated');
            });
        } else {
            return res.send('The user has a higher progress');
        }
        if (err) return res.send(500, { error: err });
    });

    // UserNivel.findOneAndUpdate({ user_id: user_id }, req.body, { upsert: true }, function(err, result) {
    //     if (err) return res.send(500, { error: err });

    //     return res.send('Succesfully saved');
    // });
};

exports.userMaxNivel = function(req, res, next) {
    const user_id = req.params.userId;

    UserNivel.findOne({ user_id: new ObjectId(user_id) }, function(err, userMaxNivel) {
        res.send(userMaxNivel);
    });
};
