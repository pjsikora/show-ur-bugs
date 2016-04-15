import React from 'react';

class Point extends React.Component {
    constructor(props) {
        super(props);

        this.size = 30;
    }

    getStyles() {
        var styles = {
            position: 'absolute',
            top: this.props.y-15 + 'px',
            left: this.props.x-15 + 'px',
            width: this.size/2+"px",
            height: this.size/2+"px",
            borderRadius: "50%",
            border: "3px solid #fff",
            background: "black",
            transform: "translate(-50,-50)"
        };

        return styles;
    }

    render() {

        return <div style={this.getStyles()}></div>;
    }
}

export default Point;