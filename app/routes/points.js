var express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    Point = require('../models/point.js');

// router.use(function(req, res, next) {
//
//     // check header or url parameters or post parameters for token
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];
//
//     // decode token
//     if (token) {
//
//         // verifies secret and checks exp
//         jwt.verify(token, 'secretKey', function(err, decoded) {
//             if (err) {
//                 return res.json({ success: false, message: 'Failed to authenticate token.' });
//             } else {
//                 // if everything is good, save to request for use in other routes
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//
//     } else {
//
//         // if there is no token
//         // return an error
//         return res.status(403).send({
//             success: false,
//             message: 'No token provided.'
//         });
//
//     }
// });

function pointsAll (req, res) {
    Point.find({}, function (err, points) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(points);
        }
    });
}

router.get('/', pointsAll);
router.post('/', pointsAll);

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