var express = require('express'),
    router = express.Router(),
    users = require('./controllers/users'),
    views = require('./controllers/views'),
    points = require('./controllers/points'),
// screenshots = require('./controllers/screenshots'),
    projects = require('./controllers/projects');