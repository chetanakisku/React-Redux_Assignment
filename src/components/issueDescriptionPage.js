import React,{Component} from 'react';
import Comments from './comments';
import '../styles/issue-description-page.css';
import CommentBody from './comment_body';

export default class IssueDescriptionPage extends Component {
    render() {
        const {
            title,
            number,
            state,
            user,
            body,
            created_at,
            url
        } = this.props.issues;
            return (
                <section className="issue-description-section">
                <div className="issue-description-heading">
                <h1>
                    {title} 
                    <span> #{number}</span>
                </h1>
                <p>
                    <span className="status-badge">{state}</span> 
                    <span><b>{user.login}</b></span>
                    <span> opened this issue on </span>
                    <span>{created_at}.</span>
                    <span> {this.props.comments.length} comments</span>

                </p>
               </div>
                <CommentBody commenter={user} commentText={body} commentTime={created_at}/>
                <Comments commentData={this.props.comments}/>
                </section>
            )
    }
  }

