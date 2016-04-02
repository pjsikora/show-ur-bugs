(function () {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),

        action = null;


    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Keep variables global
    window.APP = {};
    window.APP.ctx = ctx;
    window.APP.canvas = canvas;
    window.APP.action = action;
})();
