var express = require('express'),
    router = express.Router(),
    Point = require('../models/point.js');


router.post('/', function (req, res) {
    Point.find({}, function (err, points) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(points);
        }
    });
});

router.post('/create', function (req, res) {
    var point = new Point();

    point.name = req.body.name;
    point.x = req.body.x;
    point.y = req.body.y;

    point.save(function (err) {
        if (err) {
            res.json({status: 'ERROR', error: JSON.stringify(err)})
        }

        else
            res.json({status: 'OK'});
    });
});

router.post('/read', function (req, res) {

});

router.post('/update', function (req, res) {
    res.json({
        token: req.body.token,

        name: req.body.name,
        x: req.body.x,
        y: req.body.y,
        isOpened: true,
        viewID: req.body.viewID
    });
});

router.post('/delete', function (req, res) {
    Point.remove({_id: req.body._id}, function(err) {
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