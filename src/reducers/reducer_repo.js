import {FETCH_REPO} from '../actions/index';

export default function(state=[], action){
    switch(action.type){
        case FETCH_REPO :
            return Object.assign([],state,action.payload.data);    
    }
    return state;
}