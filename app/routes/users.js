var express = require('express'),
    router = express.Router(),
    
    users = require('../controllers/users');
    // views = require('./controllers/views'),
    // points = require('./controllers/points'),
// screenshots = require('./controllers/screenshots'),
//     projects = require('./controllers/projects');

// router.get('/', users.getAll);
// router.get('/users/create', users.create);
// router.get('/users/read', users.read);
// router.get('/users/update', users.update);
// router.get('/users/delete', users.delete);

router.post('/', users.getAll);
router.post('/create', users.create);
router.post('/read', users.read);
router.post('/update', users.update);
router.post('/delete', users.delete);

module.exports = router;