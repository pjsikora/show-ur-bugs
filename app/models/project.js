var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectSchema   = new Schema({
    name: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: true
    },
    isOpened: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Project', ProjectSchema);