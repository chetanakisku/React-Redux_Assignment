import React, {Component} from 'react';
import '../styles/navigation.css';

export default class Navigation extends Component {
    render(){
        return (
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Issues
                            <span className="badge">{this.props.issueCount}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}