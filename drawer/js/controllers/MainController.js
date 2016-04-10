(function () {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),

        action = null;


    var mode = 'draw';
    var draw = 'rectangle';


    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    document.addEventListener('pizuo', function(e) {
        var _detail = e.detail;

        if (mode == "draw") {
            console.log('pizuo');

            //console.log(e.detail.mouseStartX);
            //console.log(e.detail.mouseStartY);
            //console.log(e.detail.mouseStopX);
            //console.log(e.detail.mouseStopY);
            //console.log(e.detail.diagonal);

            if (e.detail.diagonal < 10) {
                alert("Too small offset");
            }
            else
                Primitives.drawRectangle(_detail.mouseStartX, _detail.mouseStartY, _detail.mouseStartX-_detail.mouseStopX, _detail.mouseStartY-_detail.mouseStopY, 'blue', 'green');
            //Primitives.drawRectangle(100, 100, 100, 100, 'blue', 'blue');
        }
    });

    // Keep variables global
    window.APP = {};
    window.APP.ctx = ctx;
    window.APP.canvas = canvas;
    window.APP.action = action;
})();
