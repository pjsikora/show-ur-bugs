var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

// Load database configuration
var config = require('./config');



//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.multipart());

app.use(bodyParser.json());
app.use(function(req, res, next) {
    // IE9 doesn't set headers for cross-domain ajax requests
    if(typeof(req.headers['content-type']) === 'undefined'){
        req.headers['content-type'] = "application/json; charset=UTF-8";
    }
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
var routerPoints = require('./app/routes/points.js');
var routerProjects = require('./app/routes/projects.js');
var routerViews = require('./app/routes/views.js');
var routerScreenshots = require('./app/routes/screenshots.js');

// Define port
var port = process.env.PORT || 8011;



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
app.use('/points', routerPoints);
app.use('/projects', routerProjects);
app.use('/views', routerViews);
app.use('/screenshots', routerScreenshots);

//
app.listen(port, function () {
    console.log('Lets rock on port '+port+'!');
});


