import axios from 'axios';

export const FETCH_REPO = 'FETCH_REPO';
export const FETCH_REPO_ISSUES = 'FETCH_REPO_ISSUES';
export const FETCH_ISSUE_COMMENTS = 'FETCH_ISSUE_COMMENTS';

const clientId = '2b22263838535b2d04e4';
const clientSecret = 'ab2323a9ddf40330a5187bf7ed99cdb47d282f29';
const ROOT_URL = 'https://api.github.com';

export function fetchRepo(user){
    const url = `${ROOT_URL}/users/${user}/repos?client_id=${clientId}&client_secret=${clientSecret}`;
    const request = axios.get(url);

    console.log('request',request);
    return {
        type: FETCH_REPO,
        payload: request,
    };
}

export function fetchRepoIssues(user, repo){
    const url = `${ROOT_URL}/repos/${user}/${repo}/issues?client_id=${clientId}&client_secret=${clientSecret}`;
    const request = axios.get(url);
    console.log('in action',request)
    return {
        type: FETCH_REPO_ISSUES,
        payload: request,
    };
}

export function fetchIssueComments(commentUrl){
    const url = `${commentUrl}/comments?client_id=${clientId}&client_secret=${clientSecret}`;
    const request = axios.get(url);
    console.log('in action',request)
    return {
        type: FETCH_ISSUE_COMMENTS,
        payload: request,
    };
}

