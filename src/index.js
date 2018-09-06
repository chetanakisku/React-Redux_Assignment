import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import RepoListItemIssues from './containers/repo_list_item_issues';
import IssueDescription from './containers/issue_description';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/repoListItem/issues/eachissue' component={IssueDescription} />
          <Route path='/repoListItem/issues' component={RepoListItemIssues} />
          <Route path='/' component={App}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
