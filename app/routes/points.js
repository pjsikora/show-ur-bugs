var express = require('express'),
    router = express.Router(),
    Point = require('../models/point.js');

router.post('/',function(req, res) {

    res.json({ points: [{x:100, y:100},{x:120, y:120},{x:140, y:140}]});
});

router.post('/create', function(req, res) {
    res.json({
        token: req.body.token,

        name: req.body.name,
        x: req.body.x,
        y: req.body.y,
        isOpened: true,
        viewID: req.body.viewID
    });
});

router.post('/read', function(req, res) {

});

router.post('/update', function(req, res) {
    res.json({
        token: req.body.token,

        name: req.body.name,
        x: req.body.x,
        y: req.body.y,
        isOpened: true,
        viewID: req.body.viewID
    });
});

router.post('/delete', function(req, res) {
    res.json({
        token: req.body.token,

        ID: req.body.ID
    });
});

module.exports = router;