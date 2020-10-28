import * as actionTypes from '../actions/actionTypes';

const initialState = {
    feeds: [],
    error: null,
    isLoading: false,
}

const feedReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.SET_FEEDS:
            return {
                ...state,
                feeds: action.feeds,
                error: null,
                isLoading: false,
            }
        case actionTypes.FEED_SUCCESS: 
            return {
                ...state,
                error: null,
                isLoading: false,
            }
        case actionTypes.FEED_FAIL: 
            return {
                ...state,
                error: action.error,
                isLoading: false,
            }
        default: 
            return state;
    }
}


export default feedReducer;