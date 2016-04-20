var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ViewSchema   = new Schema({
    name: String,
    ID: String,

    projectID: String,

    createDate: Date,
    createdBy: Number,
    isOpened: Boolean,

});

module.exports = mongoose.model('View', ViewSchema);