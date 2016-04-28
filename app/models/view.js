var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ViewSchema   = new Schema({
    name: String,

    projectID: String,

    createDate: Date,

    createdBy: {
        type: String
    },
    
    isOpened: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('View', ViewSchema);