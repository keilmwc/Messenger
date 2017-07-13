/**
 * Created by KeilCarpenter on 2/07/2017.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Message = require('../models/message');

router.get('/', function(req, res, next){
    Message.find()
        .populate('user', 'firstName')
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

// Make sure only authenticaed (loggedin) users can access routes
router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(error, decoded){
        if(error){
            return res.status(401).json({
                title: 'Not Authenticated!',
                error: error
            })
        }
        next();
    })
});

router.post('/', function(req, res, next){
    var decoded = jwt.decode(req.query.token);// Decrypt token contents

    // Find user by ID taken from with the token
    User.findById(decoded.user._id, function(error, user){
        if(error){
            return res.status(500).json({
                title: "User not found!",
                error: error
            })
        }

        // Create a new message and assign to user account
        var message = new Message({
            content: req.body.content,
            user: user
        });
        message.save(function(error, result){
            if(error){
                return res.status(500).json({
                    title: 'Oops! An error occurred',
                    error: error
                });
            }
            user.messages.push(result);// Push message to array on user object
            user.save();// Save updated user in this case his/her message
            res.status(200).json({
                message: 'Message Saved',
                object: result
            })
        });
    })
});

router.patch('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);// Decrypt token contents
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
        if(message.user !== decoded.user._id){
            return res.status(401).json({
                title: 'Not Authenticated!',
                error: {message: 'Users do not match'}
            })
        }

        message.content = req.body.content;
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
    })
});

router.delete('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);// Decrypt token contents
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
        if(message.user !== decoded.user._id){
            return res.status(401).json({
                title: 'Not Authenticated!',
                error: {message: 'Users do not match'}
            })
        }
        message.remove(function(error, result){
            if(error){
                return res.status(500).json({
                    title: 'Oops! An error occurred',
                    error: error
                });
            }
            res.status(200).json({
                message: 'Message removed!',
                object: result
            })
        });
    })
});

module.exports = router;