var express = require('express');
var app = express();

// var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var morgan   = require('morgan');
var router = express.Router();

// Load database configuration
var config = require('./config');

// app.use(morgan('dev'));

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


// Set routes
var allRoutes = require('./app/routes');

app.use('/api', allRoutes);

// Define port
// var port = process.env.PORT || 8091;
var port = 8091;

// Connect with database
if (typeof(process.env.PORT) == "undefined") {
    mongoose.connect(config.databaseDEV);
} else {
    mongoose.connect(config.databasePROD);
}


// Public / static folder
app.use(express.static('./frontend/ng2cli/dist'));



io.on('connection', function(socket){
    console.log('a user connected');
});

app.listen(port, function () {
    console.log('Lets rock on port '+port+'!');
});


