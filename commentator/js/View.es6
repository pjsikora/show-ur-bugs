class View {
    constructor(imageURL) {
        this.points = [];
        this.imageURL = imageURL;

        this.checkLocalStorage();

        this.loadImage();

        this.$el = document.getElementById('stage');
        this.$el.addEventListener('click',(event) => this.onClick(event));
    }

    onClick(e) {
        var point = this.addPoint(e.pageX, e.pageY);
        this.points.push(point);
        console.log(this.points);
        localStorage.setItem('points', JSON.stringify(this.points));
    }

    checkLocalStorage() {
        var _points = JSON.parse(localStorage.getItem('points'));
        var _this = this;
        var container = document.getElementById('list_of_points');


        container.addEventListener('click', function(e) {
            console.log(e.target.dataset.id);
        });
        console.log(_points);

        this.points = _points;
        _points.forEach(function(el, id) {
            _this.addPoint(el.x, el.y, id);

            var el = document.createElement('li');
            el.textContent = "Point";
            el.dataset.id = id;
            el.dataset.status = el.status;

            container.appendChild(el);
        })
    }

    loadImage() {
        var myImage = new Image();
        myImage.src = this.imageURL;

        document.getElementById('stage').appendChild(myImage);
    }

    addPoint(x, y, id) {
        return new Point(x, y, id);
    }
}