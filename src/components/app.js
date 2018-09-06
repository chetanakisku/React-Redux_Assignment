import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import RepoList from '../containers/repo_list';
import Header from './header';
import '../styles/app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchBar />
        <RepoList />
      </div>
  );
  }
}
