var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectSchema   = new Schema({
    name: String,
    createDate: Date,
    createdBy: String,
    isOpened: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Project', ProjectSchema);