import React, {Component} from 'react';
import {connect} from 'react-redux';

import IssueItem from './issue_item';
import Header from '../components/header';
import Navigation from '../components/navigation';
import '../styles/issue-list.css';


class RepoListItemIssues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.location.state
        }
    }

    render() {
        const issueList = this.props.repoIssues.map(issueItem => {
            return <IssueItem key={issueItem.id} issueItemProps={issueItem} />
        })

        
        return (
            <div>
                <Header />
                <Navigation issueCount={this.props.repoIssues.length} />
                <section className="issue-list-section">
                    <div className="issue-list-header">
                        <button>Filters:</button>
                        <input /> 
                    </div>
                    <ul className="list-group">
                        <li className="list-group-item issue-list-info"><b>{this.props.repoIssues.length} Open</b></li>
                        {issueList}
                    </ul>
                </section>
            </div>
        )
    }
}

function mapStateToProps({repoIssues}){
    return { repoIssues };
}

export default connect(mapStateToProps)(RepoListItemIssues);

