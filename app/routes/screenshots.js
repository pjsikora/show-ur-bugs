var express = require('express'),
    router = express.Router(),
    Project = require('../models/project.js')

router.post('/', function(req, res) {
    res.json({ projects: []});
});

router.post('/create',function(req, res) {

});

router.post('/update',function(req, res) {

});

router.post('/delete',function(req, res) {

});

module.exports = router;