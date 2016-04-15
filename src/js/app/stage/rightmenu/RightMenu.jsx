import React from 'react';

import CommentsList from './CommentsList';

class RightMenu extends React.Component {
    constructor(props) {
        super(props);
        console.log('RightMenu');
    }

    getStyles() {
        var styles = {
            padding: "5px",
            width: "250px",
            height: "100%",
            position: "fixed",
            right: "0",
            top: "0",
            background: "#fff",
            zIndex: "10",
            borderLeft: "1px solid #000"
        }

        return styles;
    }

    render() {
        var elements = this.props.data.points.map(function(el) {
            return (
                <li>
                    {el.name}
                    <CommentsList comments={el.comments} />
                </li>
            )
        });

        return (
            <div style={this.getStyles()}>
                <p>Project: {this.props.data.project}</p>
                <p>View: {this.props.data.view}</p>
                <ul>
                    {elements}
                </ul>
            </div>
        );
    }
}

export default RightMenu;