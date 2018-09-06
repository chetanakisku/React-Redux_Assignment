import { combineReducers } from 'redux';
import RepoReducer from './reducer_repo';
import RepoIssuesReducer from './reducer_repo_issues';
import IssueCommentsReducer from './reducer_issue_comments';


const rootReducer = combineReducers({
  repo : RepoReducer,
  repoIssues : RepoIssuesReducer,
  issueComments : IssueCommentsReducer



});

export default rootReducer;
