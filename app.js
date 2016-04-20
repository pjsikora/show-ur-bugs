var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

// Load database configuration
var config = require('./config');

// Routes
var routerPoints = require('./app/routes/points.js');
var routerProjects = require('./app/routes/projects.js');
var routerViews = require('./app/routes/views.js');

// Define port
var port = process.env.PORT || 8080;

// Connect with database
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Public / static folder
app.use(express.static('public'));

// Check domain
app.get('/checker', function(req, res) {
    res.json({ domain: req.headers.host });
});

// Routes
app.use('/points', routerPoints);
app.use('/projects', routerProjects);
app.use('/views', routerViews);

//
app.listen(port, function () {
    console.log('Lets rock on port '+port+'!');
});


