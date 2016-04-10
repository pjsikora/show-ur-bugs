(function () {
    var keysDown = [];

    function onKeyDown(e) {
        var index = keysDown.indexOf(e.keyCode);

        if (index == -1)
            keysDown.push(e.keyCode);
        console.log(keysDown);
    }

    function onKeyUp(e) {
        var index = keysDown.indexOf(e.keyCode);

        if (index > -1) {
            keysDown.splice(index, 1);
        }

        console.log(keysDown);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    window.KEYSDOWN = keysDown;
})();
