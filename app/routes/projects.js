var express = require('express'),
    router = express.Router(),
    Project = require('../models/project.js')

router.post('/', function(req, res) {
    Project.find({}, function (err, points) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(points);
        }
    });
});

router.post('/create',function(req, res) {
    var project = new Project();

    project.save(function (err) {
        if (err) {
            res.json({status: 'ERROR', error: JSON.stringify(err)})
        }

        else
            res.json({status: 'OK'});
    });
});

router.post('/update',function(req, res) {

});

router.post('/delete',function(req, res) {
    Project.remove({_id: req.body._id}, function(err) {
        if (err) {
            res.json({
                status: 'ERROR',
            });
        }
        else {
            res.json({
                status: 'OK',
            });
        }
    });
});

module.exports = router;