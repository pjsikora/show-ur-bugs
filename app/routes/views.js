var express = require('express'),
    router = express.Router(),
    View = require('../models/view.js');

function getAll(req, res) {
    View.find({}, function (err, views) {
        if (err) {
            console.log(err);
        } else {
            res.json(views);
        }
    });
}

router.get('/', getAll);
router.post('/', getAll);

function _valueGETorPOST(req, varName) {
    return req.query[varName] || req.body[varName];
}

function viewCreate(req, res) {
    var view = new View(),
        returnObj = {};

    view.name = _valueGETorPOST(req, 'name');
    view.screenshotURL = req.query.screenshotURL || req.body.screenshotURL;
    view.description = req.query.description || req.body.description;
    view.projectID = req.query.projectID || req.body.projectID;
    view.createdBy = req.query.createdBy || req.body.createdBy;
    view.isOpened = req.query.isOpened || req.body.isOpened || true;

    //TODO check if ID of user exists
    //TODO check if ID of project exists

    view.save(function (err) {
        if (err) {
            res.json({status: 'ERROR', error: JSON.stringify(err)});
        } else {
            res.json({status: 'OK'});
        }
    });
}

// http://localhost:8090/views/create?name=First&screenshot=urlOfScreenshot&description=Description&projectID=projectID&isOpened=false&createdBy=userID
router.get('/create', viewCreate);
router.post('/create', viewCreate);

function read(req, res) {
    var object = {};

    var projectID = req.query.projectID || req.body.projectID;

    View.find({projectID: projectID}, function (err, views) {
        if (err) {
            console.log(err);
        } else {
            res.json(views);
        }
    });
}

// http://localhost:8090/views/read
// http://localhost:8090/views/read?projectID=projectID
router.get('/read', read);
router.post('/read', read);

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