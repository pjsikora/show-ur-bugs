var express = require('express'),
    router = express.Router(),
    Project = require('../models/project.js'),
    webshot = require('webshot'),
    fs = require('fs'),
    jwt = require('jsonwebtoken'),
    config = require('../../config');


router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, 'secretKey', function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

router.post('/', function (req, res) {
    res.json({projects: req});
});


function screenshotsCreate(req, res) {
    var token = req.query.token || req.body.token,
        screenWidth = req.query.screenWidth || req.body.screenWidth || 1200,
        screenHeight = req.query.screenHeight || req.body.screenHeight || 'all',
        url = req.query.url || req.body.url,
        file = req.query.file || req.body.file,
        group = req.query.group || req.body.group,
        directory = req.query.directory || req.body.directory,
        screenShotURL = config.screenshotsDirectory + '/' + group + '/' + directory + '/' + file + '.png',

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

// function readAttribute(name) {
//     return req.query[name] || req.body[name];
// }


/**
 * @url-in-browser /screenshots/read?group=group&project=project&view=view
 */
function screenshotsRead(req, res) {
    var image_origial = "screenshots/directory/le.png",
        token = req.query.token || req.body.token,
        group = req.query.group || req.body.group,
        project = req.query.project || req.body.project,
        view = req.query.view || req.body.view;

    console.log(group + '/' + project + '/' + view);

    // Check if file exists
    if (fs.existsSync(image_origial)) {
        // File exists so lets bring the base64 from it
        fs.readFile(image_origial, function (err, original_data) {
            var base64Image = original_data.toString('base64');
            res.send('<img src="data:image/png;base64,' + base64Image + '"/>');
            // res.json({ image: base64Image });
        });
    }

    // File doesnt exist - lets throw an error
    else {
        res.json({status: "ERRROR", msg: "File doesnt exists"});
    }
}

router.get('/read', screenshotsRead);
router.post('/read', screenshotsRead);

// router.post('/update', function (req, res) {
// });



// router.post('/delete', function (req, res) {
//
// });

module.exports = router;