import React, {Component} from 'react';
import CommentBody from './comment_body';


export default class Comments extends Component {
    render(){
        const {commentData} = this.props;
        const commentRow = commentData.map(commentItem => {
            return <CommentBody commenter={commentItem.user} commentText={commentItem.body} commentTime={commentItem.created_at}/>;
        })
        return <div>{commentRow}</div>;
    }
}