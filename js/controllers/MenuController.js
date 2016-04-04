(function () {
    var currentlyClickedElement = null;

    var template = '<ul id="MainMenu">' +
        '<li>Primitives</li>' +

        '<ul>' +
        '<li data-action="drawRectangle">Draw rectangle</li>' +
        '<li data-action="drawCircle">Draw circle</li>' +
        '<li data-action="drawStar">Draw star</li>' +
        '</ul>' +

        '</ul>';


    //var styles = `dupa`;

    var styles = "<style>" +
        ".active {" +
        "background: red;" +
        "}" +
        "</style>";

    //<style>

    //</style>

    var host = document.querySelector('menu');
    var root = host.createShadowRoot();
    root.innerHTML = template + styles;

    root.getElementById("MainMenu").addEventListener('click', function (e) {
        console.log(e.target.dataset);

        if (currentlyClickedElement != null)
            currentlyClickedElement.classList.remove('active');

        currentlyClickedElement = e.target;

        if (e.target.classList.length == 0) {
            e.target.classList.add('active');
        }

    })
})();