/**
 * Created by KeilCarpenter on 2/07/2017.
 */
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user');
var jwt = require('jsonwebtoken');

router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10), // Encrypt password
        email: req.body.email
    })
    user.save(function(error, result){
        if(error){
            return res.status(500).json({
                title: 'Oops! An error occurred!',
                error: error
            })
        }
        res.status(201).json({
            message: 'User Created',
            object: result
        })
    });
});

router.post('/signin', function(req, res, error){
    User.findOne({email: req.body.email}, function(error, user){
        if(error){
            return res.status(500).json({
                title: 'Oops! An error occurred!',
                error: error
            })
        }

        // Check user credentials
        if(!user || bcrypt.compareSync(req.body.password, user.password)){
            res.stat(401).json({
                Title: 'Invalid login',
                error: {Message: 'Invalid login credentials'}
            })
        }else{
            jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            res.status(200).json({
                message: 'Successfully logged in!',
                token: token,
                userId: user._id
            })
        }
    });
});

module.exports = router;
