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

/**
 * @url-in-browser /api/views
 */
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

function viewUpdate(req, res) {
    var viewID = req.query._id || req.body._id;

    var newViewData = {};

    if (req.query.screenshotURL || req.body.screenshotURL) {
        newViewData.screenshotURL = req.query.screenshotURL || req.body.screenshotURL;
    }
    if (req.query.name || req.body.name) {
        newViewData.name = req.query.name || req.body.name;
    }
    if (req.query.description || req.body.description) {
        newViewData.description = req.query.description || req.body.description;
    }
    if (req.query.projectID || req.body.projectID) {
        newViewData.projectID = req.query.projectID || req.body.projectID;
    }
    if (req.query.createDate || req.body.createDate) {
        newViewData.createDate = req.query.createDate || req.body.createDate;
    }
    if (req.query.createdBy || req.body.createdBy) {
        newViewData.createdBy = req.query.createdBy || req.body.createdBy;
    }
    if (req.query.isOpened || req.body.isOpened) {
        newViewData.isOpened = req.query.isOpened || req.body.isOpened;
    }

    // view._id = req.query._id || req.body._id;
    // view._id = req.query._id || req.body._id;
    var query = {_id: viewID};
    var newData = newViewData;

    View.findOneAndUpdate(query, newData, {upsert: true}, function (err, doc) {
        if (err) {
            return res.json({ status: "ERROR", error: err.toString() });
        } else {
            return res.json({ status: "OK", msg: "succesfully saved"});
        }
    });
}
// http://localhost:8091/api/views/update?_id=572b5f366387d5f325b2e647&name=Fresh
// http://localhost:8091/api/views/update?_id=572b5f366387d5f325b2e647&name=Fisiu&projectID=572b77d68f1a44a2268c59fc
router.get('/update', viewUpdate);
router.post('/update', viewUpdate);

function viewDelete(req, res) {
    View.remove({_id: req.body._id}, function (err) {
        if (err) {
            res.json({
                status: 'ERROR'
            });
        }
        else {
            res.json({
                status: 'OK'
            });
        }
    });
}

router.post('/delete', viewDelete);
router.post('/delete', viewDelete);

module.exports = router;