var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/getjson', function (req, res) {
    res.json({project: 'projectName',
        view: 'viewName',
        image: 'img/ND.jpg',
        points: [
            {
                name: 'Uno',
                x: 100,
                y: 100,
                comments: [
                    {
                        author: 'Autor 1',
                        content: 'Content',
                        date: 'Date',
                        isDone: 0
                    },{
                        author: 'Autor 1',
                        content: 'Content',
                        date: 'Date',
                        isDone: 0
                    }
                ]
            },
            {
                name: 'Dos',
                x: 100,
                y: 200
            },
            {
                name: 'Tres',
                x: 200,
                y: 200
            },
            {
                name: 'Quattro',
                x: 200,
                y: 100
            }
        ]


    });
});

app.listen(port, function () {
    console.log('Lets rock on port '+port+'!');
});