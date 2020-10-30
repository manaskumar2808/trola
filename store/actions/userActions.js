import * as actionTypes from './actionTypes';
import axios from '../../api/axios-auth';


export const fetchCurrentUser = (userId) => {
    return dispatch => {
        axios.get(`profile/detail/${userId}/`).
        then(response => {
            dispatch(setCurrentUser(response.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const setCurrentUser = (currentUser) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user: {
            userName: currentUser.userName,
            email: currentUser.email,
            profileImageUrl: currentUser.profileImageUrl,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            phoneNo: currentUser.phoneNo,
        }
    }
}

export const updateCurrentUser = (newProfile) => {
    console.log(newProfile);
    return dispatch => {
        const userId = localStorage.getItem('userId');
        axios.patch(`profile/update/${userId}/`,newProfile)
        .then(response => {
            console.log(response.data);
            dispatch(setCurrentUser(response.data));
        }).catch(error => {
            console.log(error);
        });
    }
};


export const fetchUsers = () => {
    return dispatch => {
        axios.get('profile/')
        .then(response => {
            dispatch(setUsers(response.data));
        }).catch(error => {
            dispatch(userFail(error));
        });
    }
}


export const setUsers = (users) => {
    const loadedUsers = [];
    for(let key in users){
        loadedUsers.push({
            id: users[key].id,
            userName: users[key].userName,
            email: users[key].email,
            profileImageUrl: users[key].profileImageUrl,
            firstName: users[key].firstName,
            lastName: users[key].lastName,
            phoneNo: users[key].phoneNo,
            userId: users[key].user,
        });
    }

    return {
        type: actionTypes.SET_USERS,
        users: loadedUsers,
    }
}

export const userSuccess = () => {
    return {
        type: actionTypes.USER_SUCCESS,
    }
}

export const userFail = (error) => {
    return {
        type: actionTypes.USER_FAIL,
        error: error,
    }
}