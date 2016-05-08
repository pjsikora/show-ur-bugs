var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PointSchema   = new Schema({
    name: String,
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    editDates: [{
        authorID: String,
        date: Date
    }],
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedDate: {
        type: Date
    },
    isOpened: {
        type: Boolean,
        default: true
    },
    viewID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Point', PointSchema);