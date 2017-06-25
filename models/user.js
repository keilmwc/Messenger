/**
 * Created by KeilCarpenter on 25/06/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

// Blueprint for model
var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

// Use unique validator
schema.plugin(mongooseUniqueValidator);

// Build 'User' model based on the specified schema
module.exports = mongoose.model('User', schema);