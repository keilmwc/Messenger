/**
 * Created by KeilCarpenter on 25/06/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Blueprint for mongo model
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// Build model named Message based on the specified schema (blueprint)
module.exports = mongoose.model('Message', schema);