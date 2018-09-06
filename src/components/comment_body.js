import React, { Component } from 'react';
import '../styles/comment-body.css';

export default class CommentBody extends Component {
  render() {
    return (
      <div className="comment-body">
        <section className="commenter">
            <img src="http://virtual-strategy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"/>
        </section>
        <section className="comment-content">
            <div className="comment-header">
            {this.props.commenter.login} commented on {this.props.commentTime}</div>
            <div className="comment-text">{this.props.commentText}</div>
        </section>
      </div>

    );
  }
}