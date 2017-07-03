/**
 * Created by KeilCarpenter on 2/07/2017.
 */
var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res, next){
    Message.find()
        .exec(function(error, messages){
           if(error){
               return res.status(500).json({
                   title: 'Oops! An error occurred!',
                   error: error
               });
           }
           res.status(200).json({
               message: 'Messages successfully retrieved!',
               object: messages
           })
        });
});

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
        res.status(200).json({
            message: 'Message Saved',
            object: result
        })
    });
});

router.patch('/:id', function(req, res, next){
    Message.findById(req.params.id, function(error, message){
        if(error){
            return res.status(500).json({
                title: 'Oops! An error occurred!',
                error: error
            })
        }
        if(!message){
            return res.status(500).json({
                title: 'No message found!',
                error: {message: 'Message not found'}
            })
        }

        message.content = req.body.content;
        message.save(function(error, result){
            message.save(function(error, result){
                if(error){
                    return res.status(500).json({
                        title: 'Oops! An error occurred',
                        error: error
                    });
                }
                res.status(200).json({
                    message: 'Updated message!',
                    object: result
                })
            });
        });
    })
});

module.exports = router;