/**
 * Created by KeilCarpenter on 2/07/2017.
 */
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user');

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

module.exports = router;
