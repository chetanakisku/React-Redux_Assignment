import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchIssueComments} from '../actions/index';
import IssueDescriptionPage from '../components/issueDescriptionPage';
import Header from '../components/header';
import Navigation from '../components/navigation';


class IssueDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.location.state
        }
        console.log('this.state',this.state)
        //console.log('this.props',this.props.location.state)
    }
    componentDidMount(){
        this.props.fetchIssueComments(this.state.data.url);
    }
    render(){
        console.log('props3',this.props);
        return (
            <div>
            <Header />
            <Navigation />
            <IssueDescriptionPage issues={this.state.data} comments={this.props.issueComments}/>
            </div>
        )
    }
}

//IssueDescription.defaultProps = { url : 'unknown' };

function mapStateToProps({issueComments}){
    return { issueComments };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchIssueComments}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueDescription);