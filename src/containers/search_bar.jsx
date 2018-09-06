import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchRepo} from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {searchTerm : ''}
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            searchTerm : event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchRepo(this.state.searchTerm);
        this.setState({ searchTerm: ''});
    }

    render(){
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Enter username to find repositiories. For example: Mojombo."
                    className="form-control"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-success">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchRepo}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);