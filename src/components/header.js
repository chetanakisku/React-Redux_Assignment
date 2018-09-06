import React, {Component} from 'react';
import classNames from 'classnames';
import '../styles/header.css';

export default class Header extends Component {
    render(){
        return (
            <header className="header">
                <p className="heading-text">React and Redux Assignment</p>
            </header>
        )
    }
}