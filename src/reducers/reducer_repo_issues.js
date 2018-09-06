import {FETCH_REPO_ISSUES} from '../actions/index';

export default function(state=[], action){
    switch(action.type){
        case FETCH_REPO_ISSUES :
            return Object.assign([],state,action.payload.data);
    }
    return state;
}