import React from 'react';
import ReactDom from 'react-dom';

import App from './app/App.jsx';




(function() {
    var getJSON = function(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    };

    getJSON('/getjson').then(function(data) {
        ReactDom.render(<App data={data}/>, document.getElementById('app'));
    }, function(status) { //error detection....
        console.log('Here comes FUCKUP!');
    });

})();