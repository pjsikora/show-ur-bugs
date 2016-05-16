'use strict';

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



function listAllUndeleted(req, res) {
    Project.find({isDeleted: false}, function (err, points) {
        if (err) {
            console.log(err);
        } else {
            res.json(points);
        }
    });
}

// http://localhost:8091/api/projects/
router.get('/', listAllUndeleted);
router.post('/', listAllUndeleted);



function listAll(req, res) {
    Project.find({}, function (err, points) {
        if (err) {
            console.log(err);
        } else {
            res.json(points);
        }
    });
}

// http://localhost:8091/api/projects/all
router.get('/all', listAll);
router.post('/all', listAll);

function readProject(req, res) {
    var id = req.query.id || req.body.id;
    console.log(id);

    Project.findOne({_id: id}, function (err, projects) {
        if (err) {
            console.log(err);
        } else {
            res.json(projects);
        }
    });
}

router.get('/read', readProject);
router.post('/read', readProject);

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

// http://localhost:8091/api/projects/create?name=ProjectName&createdBy=User&isOpened=false
router.get('/create', create);
router.post('/create', create);

function update(req, res) {
    var projectID = req.query._id || req.body._id,
        newProjectData = {};

    if (req.query.name || req.body.name) {
        newProjectData.name = req.query.name || req.body.name;
    }
    if (req.query.description || req.body.description) {
        newProjectData.description = req.query.description || req.body.description;
    }
    if (req.query.createDate || req.body.createDate) {
        newProjectData.createDate = req.query.createDate || req.body.createDate;
    }
    if (req.query.createdBy || req.body.createdBy) {
        newProjectData.createdBy = req.query.createdBy || req.body.createdBy;
    }
    if (req.query.isOpened || req.body.isOpened) {
        newProjectData.isOpened = req.query.isOpened || req.body.isOpened;
    }

    var query = {_id: projectID},
        newData = newProjectData;

    Project.findOneAndUpdate(query, newData, {upsert: true}, function (err, doc) {
        if (err) {
            return res.json({status: "ERROR", error: err.toString()});
        } else {
            return res.json({status: "OK", msg: "succesfully saved"});
        }
    });
}

router.get('/update', update);
router.post('/update', update);


function projectHardDelete(req, res) {
    Project.remove({_id: req.body._id}, function(err) {
        if (err) {
            res.json({
                status: 'ERROR'
            });
        } else {
            res.json({
                status: 'OK'
            });
        }
    });
}
/**
 * Function which setes the status isDeleted of element to true
 * @param req
 * @param res
 * @
 */
function projectDelete(req, res) {
    var viewID = req.query._id || req.body._id,
        query = {
            _id: viewID
        },
        newData = {
            isDeleted: true
        };

    Project.findOneAndUpdate(query, newData, {upsert: true}, function (err, doc) {
        if (err) {
            return res.json({status: "ERROR", error: err.toString()});
        } else {
            return res.json({status: "OK", msg: "succesfully saved"});
        }
    });
}

// http://localhost:8091/api/projects/delete?_id=572b7774c92aaf9626fb8b41
router.get('/delete', projectDelete);
router.post('/delete', projectDelete);

module.exports = router;