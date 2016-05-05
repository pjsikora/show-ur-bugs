var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ViewSchema   = new Schema({
    name: {
        type: String,
        required: true
    },
    screenshotURL: {
        type: String
    },
    description: String,
    projectID: {
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

module.exports = mongoose.model('View', ViewSchema);