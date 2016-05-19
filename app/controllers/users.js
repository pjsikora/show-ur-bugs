var User = require('../models/user.js'),
    jwt = require('jsonwebtoken');


var users = {
    login: function (req, res) {
        var response = {},
            login = req.query.login || req.body.login;

        console.log(login);

        if (typeof login === "undefined") {
            console.log(login);
        } else {
            User.findOne({login: login}, function (err, user) {
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
                        var token = jwt.sign({user: user, expiresInMinutes: 1440}, 'secretKey');

                        response = {
                            status: "OK",
                            token: token
                        };

                        res.json(response);
                    }

                }


            });
        }
    },


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
    read: function (req, res) {
        var response = {};

        res.json(response);
    },

    /**
     *
     * @param req
     * @param res
     * @url users/update
     */
    update: function (req, res) {
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

module.exports = users;