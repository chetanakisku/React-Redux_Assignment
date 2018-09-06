import React, {Component} from 'react';
import {connect} from 'react-redux';

import RepoListItem from './repo_list_item';
import '../styles/repo-list.css';

class RepoList extends Component {
    render() {
        return (
            <section className="repo-list">
                {this.props.repo.map((index)=> {
                    return <RepoListItem repoOwner={index.owner.login} repoListItem={index.name} />
                })}
            </section>
        )
    }
}

function mapStateToProps({repo}){
    return { repo };
}

export default connect(mapStateToProps)(RepoList);