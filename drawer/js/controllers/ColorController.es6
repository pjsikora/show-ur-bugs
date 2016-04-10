(function () {
    var template = `<div>
                        <strong>Border</strong>
                            R: <input id="borderColorRed">
                            G: <input id="borderColorGreen">
                            B: <input id="borderColorBlue">
                            </div>
                            <div>
                        <strong>Fill</strong>
                            R: <input id="fillColorRed">
                            G: <input id="fillColorGreen">
                            B: <input id="fillColorBlue">
                    </div>`;

    var styles = `<style>input { width: 50px;}</style>`;

    var host = document.querySelector('colorer');
    var root = host.createShadowRoot();

    root.innerHTML = template + styles;
})();

