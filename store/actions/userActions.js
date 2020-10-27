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

export const setCurrentUser = (user) => {
    return {
        type: actionTypes.CURRENT_USER,
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