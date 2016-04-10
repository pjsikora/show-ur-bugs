(function () {
    var currentlyClickedElement = null;

    var template = `<ul id="MainMenu">
                        <li>Primitives
                            <ul>
                                <li data-action="drawRectangle">Draw rectangle</li>
                                <li data-action="drawCircle">Draw circle</li>
                                <li data-action="drawStar">Draw star</li>
                            </ul>
                        </li>
                    </ul>`;


    var styles = `<style>
                    .active {
                        background: red;
                    }
                  </style>`;

    var host = document.querySelector('menu'),
        root = host.createShadowRoot();
    
    root.innerHTML = template + styles;

    root.getElementById("MainMenu").addEventListener('click', function (e) {
        console.log(e.target.dataset);

        if (currentlyClickedElement != null)
            currentlyClickedElement.classList.remove('active');

        currentlyClickedElement = e.target;

        var classList = e.target.classList;

        if (classList.length == 0) {
            classList.add('active');
        }

    })
})();