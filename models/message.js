/**
 * Created by KeilCarpenter on 25/06/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId}
});

module.exports = mongoose.model('Message');