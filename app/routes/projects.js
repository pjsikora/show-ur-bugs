var express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    Project = require('../models/project.js')
//
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
//


function listAll(req, res) {
    Project.find({}, function (err, points) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(points);
        }
    });
}

router.get('/', listAll);
router.post('/', listAll);

function create(req, res) {
    var project = new Project();

    project.name = req.query.name || req.body.name;
    project.createdBy = req.query.createdBy || req.body.createdBy;
    project.isOpened = req.query.isOpened || req.body.isOpened;

    project.save(function (err) {
        if (err) {
            res.json({status: 'ERROR', error: JSON.stringify(err)});
        } else {
            res.json({status: 'OK'});
        }
    });
}

// http://localhost:8090/projects/create?name=ProjectName&createdBy=User&isOpened=false
router.get('/create', create);
router.post('/create', create);

function update(req, res) {
    return {req: req, res: res};
}

router.get('/update', update);
router.post('/update', update);

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