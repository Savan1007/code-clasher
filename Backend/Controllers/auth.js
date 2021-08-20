const Auth = require('../Models/auth')
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcrypt');
var config = require('../config');

module.exports = {
    signUp: async (req,res) => {
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const User = new Auth({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        User.save().then((result) => {
            var token = jwt.sign({ id: result._id }, config.secret, { expiresIn: 86400 });
            res.send({ auth: true, token: token })
        })
        .catch((err) => {
            if (err) return res.status(500).send("There was a problem registering the user`.");
        })
    },

    login: async (req, res) => {
        const newAuth = Auth.findOne({
            email: req.body.email,
        }, function (err, result){
            if (err) return res.status(500).send('Error on the server.');
            if (!result) return res.status(404).send('No user found.');
            
            // check if the password is valid
            var passwordIsValid = bcrypt.compareSync(req.body.password, result.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

            // if user is found and password is valid
            // create a token
            var token = jwt.sign({ id: result._id }, config.secret, { expiresIn: 86400 });

            res.status(200).send({ auth: true, token: token });
        })
    },

    logout: async (req, res) => {
        res.status(200).send({ auth: false, token: null });
    },

    me: async (req, res, next) => {
        const newAuth = Auth.find({
            email: req.body.email,
        }, function(err, result){
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!result) return res.status(404).send("No user found.");
            res.status(200).send(result);
        })
    }

}