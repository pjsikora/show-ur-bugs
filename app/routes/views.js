var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    Project = require('../models/project.js'),
    webshot = require('webshot'),
    fs = require('fs'),
    View = require('../models/view.js');

function listAllUndeleted(req, res) {
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
router.get('/', listAllUndeleted);
router.post('/', listAllUndeleted);

function listAll(req, res) {
    View.find({isDeleted: false}, function (err, views) {
        if (err) {
            console.log(err);
        } else {
            res.json(views);
        }
    });
}

/**
 * @url-in-browser /api/views/all
 */
router.get('/all', listAll);
router.post('/all', listAll);

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

function viewCreateWithScreenshot(req, res) {
    var view = new View(),
        returnObj = {};

    view.name = _valueGETorPOST(req, 'name');
    view.screenshotURL = req.query.screenshotURL || req.body.screenshotURL;
    view.description = req.query.description || req.body.description;
    view.projectID = req.query.projectID || req.body.projectID;
    view.createdBy = req.query.createdBy || req.body.createdBy;
    view.isOpened = req.query.isOpened || req.body.isOpened || true;


    var screenWidth = req.query.screenWidth || req.body.screenWidth || 1200,
        screenHeight = req.query.screenHeight || req.body.screenHeight || 'all',
        url = req.query.url || req.body.url,
        file = req.query.file || req.body.file,
        group = req.query.group || req.body.group,
        projectID = req.query.projectID || req.body.projectID,
        screenShotURL = config.screenshotsDirectory + '/' + projectID + '/' + file + '.png',

        options = {
            screenSize: {
                width: 2000,
                height: 480
            },
            shotSize: {
                width: 2000,
                height: 'all'
            }
            // , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
        };

    webshot(url, screenShotURL, options, function (err) {
        if (err) {
            res.json({status: 'ERROR', msg: err});
        } else {
            view.save(function (err) {
                if (err) {
                    res.json({status: 'ERROR', error: JSON.stringify(err)});
                } else {
                    res.json({url: req.body.url, status: 'OK', screenShotURL: screenShotURL});
                }
            });


        }
    });


    //TODO check if ID of user exists
    //TODO check if ID of project exists

}

router.get('/createwithscreenshot', viewCreateWithScreenshot);
router.post('/createwithscreenshot', viewCreateWithScreenshot);

function read(req, res) {
    // var object = {};

    var projectID = req.query.projectID || req.body.projectID;

    console.log("ID: " + projectID);

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
    var viewID = req.query._id || req.body._id,
        newViewData = {};

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

    var query = {_id: viewID},
        newData = newViewData;

    View.findOneAndUpdate(query, newData, {upsert: true}, function (err, doc) {
        if (err) {
            return res.json({status: "ERROR", error: err.toString()});
        } else {
            return res.json({status: "OK", msg: "succesfully saved"});
        }
    });
}

// http://localhost:8091/api/views/update?_id=572b5f366387d5f325b2e647&name=Fresh
// http://localhost:8091/api/views/update?_id=572b5f366387d5f325b2e647&name=Fisiu&projectID=572b77d68f1a44a2268c59fc
router.get('/update', viewUpdate);
router.post('/update', viewUpdate);

function viewHardDelete(req, res) {
    View.remove({_id: req.body._id}, function (err) {
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


function viewDelete(req, res) {
    var viewID = req.query._id || req.body._id,
        query = {
            _id: viewID
        },
        newData = {
            isDeleted: true
        };

    View.findOneAndUpdate(query, newData, {upsert: true}, function (err, doc) {
        if (err) {
            return res.json({status: "ERROR", error: err.toString()});
        } else {
            return res.json({status: "OK", msg: "succesfully saved"});
        }
    });
}

router.get('/delete', viewDelete);
router.post('/delete', viewDelete);

module.exports = router;