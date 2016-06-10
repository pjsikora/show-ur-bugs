var View = require('../models/view.js');


var views = {
    listAllUndeleted: function (req, res) {
        View.find({}, function (err, views) {
            if (err) {
                console.log(err);
            } else {
                res.json(views);
            }
        });
    },

    listAll: function (req, res) {
        View.find({isDeleted: false}, function (err, views) {
            if (err) {
                console.log(err);
            } else {
                res.json(views);
            }
        });
    },

    viewCreate: function (req, res) {
        var view = new View(),
            returnObj = {};

        // view.name = req.query.name || req.body.name;
        // view.screenshotURL = req.query.screenshotURL || req.body.screenshotURL;
        // view.description = req.query.description || req.body.description;
        // view.projectID = req.query.projectID || req.body.projectID;
        // view.createdBy = req.query.createdBy || req.body.createdBy;
        // view.isOpened = req.query.isOpened || req.body.isOpened;

        view.name = req.body.name;
        view.screenshotURL = req.body.screenshotURL;
        view.description = req.body.description;
        view.projectID = req.body.projectID;
        view.createdBy = req.body.createdBy;
        view.isOpened = req.body.isOpened;

        //TODO check if ID of user exists
        //TODO check if ID of project exists
        view.save(function (err) {
            if (err) {
                res.json({status: 'ERROR', error: JSON.stringify(err)});
            } else {
                res.json({status: 'OK'});
            }
        });
    },

    viewCreateWithScreenshot: function (req, res) {
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

    },

    read: function (req, res) {
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
    },

    viewUpdate: function (req, res) {
        // var viewID = req.query._id || req.body._id,
        var viewID = req.query._id || req.body._id,
            newViewData = {};

        // if (req.query.screenshotURL || req.body.screenshotURL) {
        //     newViewData.screenshotURL = req.query.screenshotURL || req.body.screenshotURL;
        // }
        // if (req.query.name || req.body.name) {
        //     newViewData.name = req.query.name || req.body.name;
        // }
        // if (req.query.description || req.body.description) {
        //     newViewData.description = req.query.description || req.body.description;
        // }
        // if (req.query.projectID || req.body.projectID) {
        //     newViewData.projectID = req.query.projectID || req.body.projectID;
        // }
        // if (req.query.createDate || req.body.createDate) {
        //     newViewData.createDate = req.query.createDate || req.body.createDate;
        // }
        // if (req.query.createdBy || req.body.createdBy) {
        //     newViewData.createdBy = req.query.createdBy || req.body.createdBy;
        // }
        // if (req.query.isOpened || req.body.isOpened) {
        //     newViewData.isOpened = req.query.isOpened || req.body.isOpened;
        // }

        if (req.body.screenshotURL) {
            newViewData.screenshotURL = req.body.screenshotURL;
        }
        if (rreq.body.name) {
            newViewData.name = req.body.name;
        }
        if (req.body.description) {
            newViewData.description = req.body.description;
        }
        if (req.body.projectID) {
            newViewData.projectID = req.body.projectID;
        }
        if (req.body.createDate) {
            newViewData.createDate = req.body.createDate;
        }
        if (req.body.createdBy) {
            newViewData.createdBy = req.body.createdBy;
        }
        if (req.body.isOpened) {
            newViewData.isOpened = req.body.isOpened;
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
    },

    viewHardDelete: function (req, res) {
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
    },

    viewDelete: function (req, res) {
        // var viewID = req.query._id || req.body._id,
        var viewID = req.body._id,
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
}


module.exports = views;