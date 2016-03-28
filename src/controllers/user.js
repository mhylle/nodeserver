var User = require('../models/user');

exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
    user.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json({message: 'The user has been added to the database'});
    });
};

exports.getUsers = function (req, res) {
    console.log('gettting users');
    User.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};
