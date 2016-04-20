var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectSchema   = new Schema({
    name: String,
    ID: String,
    createDate: Date,
    createdBy: Number,
    isOpened: Boolean
});

module.exports = mongoose.model('Project', ProjectSchema);