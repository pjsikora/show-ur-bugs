var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    jwt = require('jsonwebtoken');


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


var users = {
    /**
     *
     * @param req
     * @param res
     */
    getAll: function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                console.log(err);
            }
            res.json(users);
        });
    },

    /**
     *
     * @param req
     * @param res
     * @test-in-browser users/create?login=admin&password=password&email=email@email.com
     */
    create: function (req, res) {
        var user = new User(),
            returnObj = {};

        user.login = req.query.login || req.body.login;
        user.password = req.query.password || req.body.password;
        user.email = req.query.email || req.body.email;
        //user.createDate = Date().now();

        console.log(Date().now);

        user.save(function (err) {
            if (err) {
                returnObj = {
                    status: 'ERROR',
                    error: JSON.stringify(err)
                };
            } else {
                returnObj = {
                    status: 'OK'
                };
            }

            res.json(returnObj);
        });
    },

    /**
     *
     * @param req
     * @param res
     * @url users/read
     */
    read: function(req, res) {
        var response = {};

        res.json(response);
    },

    /**
     *
     * @param req
     * @param res
     * @url users/update
     */
    update: function(req, res) {
        var response = {};

        res.json(response);
    },

    /**
     *
     * @param req
     * @param res
     * @url users/delete
     */
    delete: function (req, res) {
        var response = {};

        User
            .remove({_id: req.body._id}, function (err) {
                if (err) {
                    response = {
                        status: 'ERROR',
                        msg: err
                    };

                    res.json(response);
                } else {
                    response = {
                        status: 'OK'
                    };

                    res.json(response);
                }
            });
    }


}


router.get('/', users.getAll);
router.post('/', users.getAll);


// CRUD
router.get('/create', users.create);
router.post('/create', users.create);

router.get('/read', users.read);
router.post('/read', users.read);

router.get('/update', users.update);
router.post('/update', users.update);

router.get('/delete', users.delete);
router.post('/delete', users.delete);



module.exports = router;