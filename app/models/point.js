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
    createDate: Date,
    editDate: Array,
    isOpened: {
        type: Boolean,
        default: true
    },

    viewID: String
});

module.exports = mongoose.model('Point', PointSchema);