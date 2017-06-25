var express = require('express');
var router = express.Router();
var User = require ('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(error, document){
        if(error){
            return res.send('error');
        }
        res.render('node', {email: document.email});
    });
});

router.post('/', function(req, res, next){
    var email = req.body.email;
    var user = new User({
        firstName: 'Keil',
        lastName: 'Carpenter',
        password: 'password',
        email: email
    });
    user.save(); // Store user object in db
    res.redirect('/');
});

module.exports = router;
