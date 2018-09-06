import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/issue-list.css';

export default class IssueItem extends Component {
    render(){
        return(
            <li className="list-group-item">
                <Link to={{ pathname: '/repoListItem/issues/eachissue', state: this.props.issueItemProps}}>
                    <li>{this.props.issueItemProps.title}</li>
                </Link>
            </li>            
        )
    }
}
