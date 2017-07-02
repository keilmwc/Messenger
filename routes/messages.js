/**
 * Created by KeilCarpenter on 2/07/2017.
 */
var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function(req, res, next){
    var message = new Message({
        content: req.body.content
    });
    message.save(function(error, result){
        if(error){
            return res.status(500).json({
                title: 'Oops! An error occurred',
                error: error
            });
        }
        res.status(201).json({
            message: 'Message Saved',
            object: result
        })
    });
});

module.exports = router;