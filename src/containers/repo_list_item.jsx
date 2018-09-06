import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchRepoIssues} from '../actions/index';
import '../styles/repo-list.css';

class RepoListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            currentRepo : this.props.repoListItem,
            author : this.props.repoOwner
        }
        this.onInputClick=this.onInputClick.bind(this);
    }

    onInputClick(){
        this.props.fetchRepoIssues(this.state.author, this.state.currentRepo);
    }
    render() {
        console.log('this.props',this.props);
        return (
            <div className="repo-item col-sm-3 card">
                <Link to={{ pathname: '/repoListItem/issues', state: this.props.repoListItem }}>
                    <div className="card-body" onClick={this.onInputClick}>{this.state.currentRepo}</div>
                </Link>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchRepoIssues}, dispatch);
}


export default connect(null, mapDispatchToProps)(RepoListItem);



