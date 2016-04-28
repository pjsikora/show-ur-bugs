import React from 'react';

import Comment from './Comment';

class CommentsList extends React.Component {
    render() {
        //
        //if ((typeof this.props.comments) != undefined) {
        //
        //    var comments = this.props.comments.map(function(el) {
        //
        //
        //        return (
        //            <Comment comment={el.data}/>
        //        );
        //    });
        //}
        //else {
        //    var comments = "No comments";
        //}


        return (
            <ul>
            </ul>
            //<div style={this.props.name}>Hello World {this.props.name}</div>
        );
    }
}

export default CommentsList;