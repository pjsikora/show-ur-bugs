class Point {
    constructor (x,y, number) {
        this.comments =[];
        this.x = x;
        this.y = y;
        this.size = 30+15;

        this.comments = [];
        this.$el = this.createElement(number);

        this.$el.addEventListener('click', this.onClick);
    }

    onClick(e) {
        console.log('clicked');
    }

    createElement(number) {
        var el = document.createElement('div'),
            s = el.style;

        el.className="point";
        el.dataset.id = number;
        s.left = this.x-this.size/2;
        s.top = this.y-this.size/2;

        document.getElementById('stage').appendChild(el);

        return el;
    }

    addComment() {
        var comment = new Comment(user, new Date(), null, document.getElementById('comment_content').innerHTML);
        this.comments.push(comment);
    }

}