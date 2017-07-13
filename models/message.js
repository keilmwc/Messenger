/**
 * Created by KeilCarpenter on 25/06/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');
// Blueprint for mongo model
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// Gets fired when a remove action is performed on a user object
// Remove deleted message from messages array on user object so it does not persist
schema.post('remove', function(message){
    User.findById(message.user, function(error, user){
        user.messages.pull(message);// remove message from array
        user.save();
    })
});

// Build model named Message based on the specified schema (blueprint)
module.exports = mongoose.model('Message', schema);