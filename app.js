var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var morgan   = require('morgan');
var router = express.Router();
// Load database configuration
var config = require('./config');



//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.multipart());

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    // IE9 doesn't set headers for cross-domain ajax requests
    if(typeof(req.headers['content-type']) === 'undefined'){
        req.headers['content-type'] = "application/json; charset=UTF-8";
    }
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));


app.set('secret', 'fedojo_supersecret');
// Routes
/**
 *
 * @param req
 * @param res
 * @url users/login
 */
function login(req, res) {
    var response = {},
        login = req.query.login || req.body.login;

    console.log(login);

    if (typeof login === "undefined") {
        console.log(login);
    } else {
        User.findOne({login: login}, function(err, user) {
            console.log(user);

            if (err) {
                response = {
                    status: "ERROR",
                    msg: err
                };

                res.json(response);
            } else {
                if (user == null) {
                    response = {
                        status: "ERROR",
                        msg: "User not found"
                    };

                    res.json(response);
                } else {
                    var token = jwt.sign({ user: user, expiresInMinutes: 1440}, 'secretKey');

                    response = {
                        status: "OK",
                        token: token
                    };

                    res.json(response);
                }

            }


        });
    }
}

// Authentication
router.get('/login', login);
router.post('/login', login);

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


var routerPoints = require('./app/routes/points.js');
var routerProjects = require('./app/routes/projects.js');
var routerViews = require('./app/routes/views.js');
var routerUsers = require('./app/routes/users.js');
var routerScreenshots = require('./app/routes/screenshots.js');

// Define port
// var port = process.env.PORT || 8080;
var port = 8090;


//console.log(process.env.ENV_VARIABLE);

// Connect with database
if (typeof(process.env.PORT) == "undefined") {
    mongoose.connect(config.databaseDEV);
}
else {
    mongoose.connect(config.databasePROD);
}



// Public / static folder
app.use(express.static('./frontend/public'));

// Check domain
app.get('/checker', function(req, res) {
    res.json({ domain: req.headers.host });
});

// Routes
app.use('/users', routerUsers);
app.use('/points', routerPoints);
app.use('/projects', routerProjects);
app.use('/views', routerViews);
app.use('/screenshots', routerScreenshots);

//
app.listen(port, function () {
    console.log('Lets rock on port '+port+'!');
});


