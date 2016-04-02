var Primitives = {

    /**
     * Draw rectangle
     *
     * @param x element x position
     * @param y element y position
     * @param with element widht
     * @param height element height
     * @param borderColor border color
     * @param fillColor fill color
     */
    drawRectangle: function (posX, posY, width, height, borderColor, fillColor) {
        var ctx = APP.ctx;

        if (KEYSDOWN.indexOf(91) == -1)
            ctx.fillRect(posX, posY, width, height);
        else
            ctx.fillRect(posX - (width / 2), posY - (height / 2), width, height);
        ctx.fillStyle = "rgb( 0, 0, 0 )";
    },

    /**
     * Draw circle
     *
     * @param x element x position
     * @param y element y position
     * @param width element widht
     * @param height element height
     * @param color element color
     */
    drawCircle: function(posX, posY, width, borderColor, fillColor) {
        var ctx = APP.ctx;

        if (KEYSDOWN.indexOf(91) == -1) {

        }
        else {

        }

        ctx.beginPath();
        ctx.arc(posX, posY, width, 0, 2 * Math.PI);
        ctx.strokeStyle = borderColor;
        ctx.fillStyle = fillColor;
        ctx.stroke();
        ctx.fill();
    },

    /**
     * Draw Star
     *
     * @param posX element x position
     * @param posY element y position
     * @param spikes number of spikes
     * @param outerRadius outer radius of star
     * @param innerRadius inner radius of star
     * @param borderColor color of border
     * @param fillColor color of fill
     *
     */
    drawStar: function(poxX, posY, spikes, outerRadius, innerRadius, borderColor, fillColor) {
        var ctx = APP.ctx;

        var rot = Math.PI / 2 * 3;
        var x = poxX;
        var y = posY;
        var step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);

        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }

        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.fillStyle = 'skyblue';
        ctx.fill();
    }
};

