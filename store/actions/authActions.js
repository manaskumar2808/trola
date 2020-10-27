import * as actionTypes from './actionTypes';
import axios from '../../api/axios-auth';

import AsyncStorage from '@react-native-community/async-storage';

export const authInit = () => {
    return {
        type: actionTypes.AUTH_INIT,
    }
}

// export const authAutoLogin = () => {
//     return dispatch => {
//         if(token == null || token === 'undefined'){
//             dispatch(authLogout());
//         } else {
//             dispatch(authSuccess(token,userId,userName));
//         }
//     }
// }

export const authLogin = (userName,password) => {
    return dispatch => {
        const authData = {
            username: userName,
            password: password,
        };

        console.log("Logging In...");

        axios.post('auth-login/',authData)
        .then(response => {
            console.log(response.data);
            dispatch(setAuthStore(
                response.data.token,
                response.data.id,
                response.data.username,
            ));
        })
        .catch(error => {
            console.log("Can't connect with the api");
            console.log(error);
            dispatch(authFail(error));
        });
    }
}

export const authSignup = (userName,email,password,passwordConfirm) => {
    return dispatch => {
        const authData = {
            username: userName,
            email: email,
            password: password,
        };
        axios.post('auth-register/',authData)
        .then(response => {
            const userId = response.data.id
           dispatch(createProfile(userId,userName,email));
        })
        .catch(error => {
            console.log(error);
            dispatch(authFail(error));
        });
    }
}


export const createProfile = (userId,userName,email) => {
    return dispatch => {
        const profileData = {
            userName: userName,
            email: email,
            firstName: null,
            lastName: null,
            profileImageUrl: null,
            phoneNo: null,
            user: userId,
        }
        axios.post('profile/create/',profileData).
        then(response => {
            console.log(response.data);
            dispatch(setProfileStore(response.data.id));
        }).
        catch(error => {
            console.log(error);
            dispatch(setProfileFailed(error));
        });
    }
}


export const setProfileStore = (profileId) => {
    return dispatch => {
        const profileData = {
            profileId: profileId,
        };
        AsyncStorage.setItem('profileData',JSON.stringify(profileData))
        .then(response => {
            dispatch(setProfileSuccess(profileId));
        }).catch(error => {
            dispatch(setProfileFailed(error));
        });
    }
}


export const setProfileSuccess = (profileId) => {
    return {
        type: actionTypes.SET_PROFILE_SUCCESS,
        profileId: profileId,
    }
}

export const setProfileFailed = (error) => {
    return {
        type: actionTypes.SET_PROFILE_FAILED,
        error: error,
    }
}


export const authLogout = () => {
    return dispatch => {
        AsyncStorage.removeItem('userData')
        .then(response1 => {
            AsyncStorage.removeItem('profileData');
        })
        .then(response2 => {
            dispatch(logout());
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
        token: null,
    }
}

export const setAuthStore = (token, userId, userName) => {
    console.log("Setting Auth Store...");
    const authData = {
        token: token,
        userId: userId,
        userName: userName,
    };
    return dispatch => {
        AsyncStorage.setItem('userData',JSON.stringify(authData))
        .then(response => {
            console.log("Auth store set");
            dispatch(authSuccess(token,userId,userName));
        }).catch(error => {
            console.log(error);
            throw error;
        });
    }
}


export const authSuccess = (token,userId,userName) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        expiryDate: null,
        userId: userId,
    }
}


export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}  


