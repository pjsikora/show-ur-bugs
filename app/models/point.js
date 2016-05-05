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
    removed: {
        type: Boolean,
        default: false
    },
    removedDate: {
        type: Date
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    editDates: [{
        authorID: String,
        date: Date
    }],
    isRemoved: {
        type: Boolean,
        default: false
    },
    isOpened: {
        type: Boolean,
        default: true
    },


    viewID: String
});

module.exports = mongoose.model('Point', PointSchema);