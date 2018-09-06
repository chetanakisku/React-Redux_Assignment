import {FETCH_ISSUE_COMMENTS} from '../actions/index';

export default function(state=[], action){
    switch(action.type){
        case FETCH_ISSUE_COMMENTS :
            return Object.assign([],state,action.payload.data);
    }
    return state;
}