var express = require('express'),
    router = express.Router(),
    View = require('../models/view.js');

router.post('/', function(req, res) {

    Point.find({}, function (err, views) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(views);
        }
    });
});

router.post('/create',function(req, res) {
    var view = new View();

    view.save(function (err) {
        if (err) {
            res.json({status: 'ERROR', error: JSON.stringify(err)})
        }

        else
            res.json({status: 'OK'});
    });
});
router.post('/read',function(req, res) {

});
router.post('/update',function(req, res) {});

router.post('/delete',function(req, res) {
    View.remove({_id: req.body._id}, function(err) {
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