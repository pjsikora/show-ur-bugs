var express = require('express'),
    router = express.Router(),
    users = require('./controllers/users'),
    views = require('./controllers/views'),
    points = require('./controllers/points'),
// screenshots = require('./controllers/screenshots'),
    projects = require('./controllers/projects');

router.get('/points/', points.listAll);
router.get('/points/all', points.listAllUndeleted);
router.get('/points/create', points.create);
router.get('/points/readall', points.read);
router.get('/points/close', points.close);
router.get('/points/read', points.readUndeleted);
router.get('/points/delete', points.deleteItem);

router.post('/points/', points.listAll);
router.post('/points/all', points.listAllUndeleted);
router.post('/points/create', points.create);
router.post('/points/readall', points.read);
router.post('/points/close', points.close);
router.post('/points/open', points.open);
router.post('/points/read', points.readUndeleted);
router.post('/points/delete', points.deleteItem);

module.exports = router;