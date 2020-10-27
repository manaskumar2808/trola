import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    currentUser: {
        userName: null,
        email: null,
        profileImageUrl: null,
        profileImage: null,
        firstName: null,
        lastName: null,
        phoneNo: null,
    },
    error: null,
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.user,
                error: null,
            };
        default: 
            return state;
    }
}

export default userReducer;

