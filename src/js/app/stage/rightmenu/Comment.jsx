import React from 'react';

class Comment extends React.Component {
    render() {
        console.log(this.props);
        return (
            <li>

            </li>
            //<div style={this.props.name}>Hello World {this.props.name}</div>
        );
    }
}

export default Comment;