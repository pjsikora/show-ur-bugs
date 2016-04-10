(function () {
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);

    var mouseDownX = null,
        mouseDownY = null,
        mouseUpX = null,
        mouseUpY = null;

//    function onClickListener(e) {
//        //Primitives.drawRectangle(e.clientX, e.clientY, 100, 100);
//        //Primitives.drawCircle(e.clientX, e.clientY, 20, "#f0f", "000");
//
//
//    }

    function onMouseDown(e) {
        mouseDownX = e.clientX;
        mouseDownY = e.clientY;

        console.log('mousedown');
    }

    function onMouseUp(e) {
        mouseUpX = e.clientX;
        mouseUpY = e.clientY;

        console.log(countOffset());

        //console.log(mouseDownX);

        var event = new CustomEvent('pizuo', {
            detail: {
                mouseStartX: mouseDownX,
                mouseStartY: mouseDownY,
                mouseStopX: mouseUpX,
                mouseStopY: mouseUpY,
                diagonal: countOffset()
            }

        });

        document.dispatchEvent(event);

        var __details = {
            offset: countOffset()
        }
    }

    /**
     * Count square
     * @param x
     * @returns {number}
     */
    function square(x) {
        return x * x;
    }

    /**
     * Return lenght of offset between two points
     * @returns {number}
     */
    function countOffset() {
        return Math.sqrt(square(mouseDownX - mouseUpX) + square(mouseDownY - mouseUpY));
    }


})();
