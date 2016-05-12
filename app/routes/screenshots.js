var express = require('express'),
    router = express.Router(),
    Project = require('../models/project.js'),
    webshot = require('webshot'),
    fs = require('fs'),
    jwt = require('jsonwebtoken'),
    config = require('../../config');

function screenshotsCreate(req, res) {
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
            res.json({url: req.body.url, status: 'OK', screenShotURL: screenShotURL});
        }
    });
    console.log(req.query.url);
}

/**
 * @url-in-browser /screenshots/create?url=google.com&file=file&directory=directory
 */
router.get('/create', screenshotsCreate);
router.post('/create', screenshotsCreate);

/**
 * @url-in-browser /api/screenshots/read?group=group&project=directory&view=file2.png
 */
function screenshotsRead(req, res) {
    // Hardcoded
    var image_origial = req.query.url || req.body.url,
        token = req.query.token || req.body.token,
        group = req.query.group || req.body.group,
        project = req.query.project || req.body.project,
        view = req.query.view || req.body.view,
        file = group + '/' + project + '/' + view + '.png';


    console.log(image_origial);
    // Check if file exists
    if (fs.existsSync(file)) {
        // File exists so lets bring the base64 from it
        fs.readFile(image_origial, function (err, original_data) {
            var base64Image = original_data.toString('base64');
            res.send('<img src="data:image/png;base64,' + base64Image + '"/>');
            // res.json({ image: base64Image });
        });
    } else {
        // File doesnt exist - lets throw an error
        res.json({status: "ERRROR", msg: "File doesnt exists"});
    }
}

router.get('/read', screenshotsRead);
router.post('/read', screenshotsRead);

module.exports = router;