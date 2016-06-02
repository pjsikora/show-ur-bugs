var express = require('express'),
    router = express.Router(),
    users = require('./controllers/users'),
    views = require('./controllers/views'),
    points = require('./controllers/points'),
    // screenshots = require('./controllers/screenshots'),
    projects = require('./controllers/projects');



router.get('/login', users.login);
router.post('/login', users.login);

//
// router.use(function(req, res, next) {
//
//     // check header or url parameters or post parameters for token
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];
//
//     // decode token
//     if (token) {
//
//         // verifies secret and checks exp
//         jwt.verify(token, 'secretKey', function(err, decoded) {
//             if (err) {
//                 return res.json({ success: false, message: 'Failed to authenticate token.' });
//             } else {
//                 // if everything is good, save to request for use in other routes
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//
//     } else {
//
//         // if there is no token
//         // return an error
//         return res.status(403).send({
//             success: false,
//             message: 'No token provided.'
//         });
//
//     }
// });

router.get('/users/', users.getAll);
router.get('/users/create', users.create);
router.get('/users/read', users.read);
router.get('/users/update', users.update);
router.get('/users/delete', users.delete);

router.post('/users/', users.getAll);
router.post('/users/create', users.create);
router.post('/users/read', users.read);
router.post('/users/update', users.update);
router.post('/users/delete', users.delete);





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




router.get('/projects/', projects.listAllUndeleted);
router.get('/projects/all', projects.listAll);
router.get('/projects/create', projects.create);
router.get('/projects/read', projects.readProject);
router.get('/projects/update', projects.update);
router.get('/projects/delete', projects.projectDelete);

router.post('/projects/', projects.listAllUndeleted);
router.post('/projects/all', projects.listAll);
router.post('/projects/create', projects.create);
router.post('/projects/read', projects.readProject);
router.post('/projects/update', projects.update);
router.post('/projects/delete', projects.projectDelete);





router.get('/views/', views.listAllUndeleted);
router.get('/views/all', views.listAll);
router.get('/views/create', views.viewCreate);
router.get('/views/createwithscreenshot', views.viewCreateWithScreenshot);
router.get('/views/read', views.read);
router.get('/views/update', views.viewUpdate);
router.get('/views/delete', views.viewDelete);

router.post('/views/', views.listAllUndeleted);
router.post('/views/all', views.listAll);
router.post('/views/create', views.viewCreate);
router.post('/views/createwithscreenshot', views.viewCreateWithScreenshot);
router.post('/views/read', views.read);
router.post('/views/update', views.viewUpdate);
router.post('/views/delete', views.viewDelete);





// router.get('/screenshots/create', screenshots.create);
// router.get('/screenshots/read', screenshots.read);
//
// router.post('/screenshots/create', screenshots.create);
// router.post('/read', screenshots.read);

module.exports = router;