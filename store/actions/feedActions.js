import * as actionTypes from './actionTypes';
import axios from '../../api/axios-feed';

export const fetchFeeds = () => {
    return dispatch => {
        axios.get('')
        .then(response => {
            console.log(response.data);
            dispatch(setFeeds(response.data));
        }).catch(error => {
            dispatch(feedFail(error));
        });
    }
}


export const setFeeds = (feeds) => {
    const loadedFeeds = [];
    for(let key in feeds){
        loadedFeeds.push({
            id: feeds[key].id,
            title: feeds[key].title,
            content: feeds[key].content,
            image: feeds[key].image,
            imageUrl: feeds[key].imageUrl,
            videoUrl: feeds[key].videoUrl,
            timestamp: feeds[key].timestamp,
            creator: {
                userName: feeds[key].creator.userName,
                email: feeds[key].creator.email,
                profileImageUrl: feeds[key].creator.profileImageUrl,
                firstName: feeds[key].creator.firstName,
                lastName: feeds[key].creator.lastName,
                phoneNo: feeds[key].creator.phoneNo,
                userId: feeds[key].creator.user,
            }
        });
    }

    return {
        type: actionTypes.SET_FEEDS,
        feeds: loadedFeeds,
    }
}


export const addFeed = (feed) => {
    const feedData = {
        title: feed.title,
        content: feed.content,
        imageUrl: feed.imageUrl,
        videoUrl: feed.videoUrl,
        image: feed.image,
        creator: {
            userName: feed.creator.userName,
            email: feed.creator.email,
            profileImageUrl: feed.creator.profileImageUrl,
            firstName: feed.creator.firstName,
            lastName: feed.creator.lastName,
            phoneNo: feed.creator.phoneNo,
            user: feed.creator.userId,
        }
    }
    return dispatch => {
        axios.post('create/',feedData)
        .then(response => {
            dispatch(feedSuccess());
        }).catch(error => {
            dispatch(feedFail(error));
        });
    }
}


export const updateFeed = (feed,feedId) => {
    const updatedFeedData = {
        title: feed.title,
        content: feed.content,
        imageUrl: feed.imageUrl,
        videoUrl: feed.videoUrl,
        image: feed.image,
        creator: {
            userName: feed.creator.userName,
            email: feed.creator.email,
            profileImageUrl: feed.creator.profileImageUrl,
            firstName: feed.creator.firstName,
            lastName: feed.creator.lastName,
            phoneNo: feed.creator.phoneNo,
            user: feed.creator.userId,
        }
    }
    return dispatch => {
        axios.post(`update/${feedId}`,updatedFeedData)
        .then(response => {
            dispatch(feedSuccess());
        }).catch(error => {
            dispatch(feedFail(error));
        });
    }
}


export const deleteFeed = (feedId) => {
    return dispatch => {
        axios.post(`delete/${feedId}`)
        .then(response => {
            dispatch(feedSuccess());
        }).catch(error => {
            dispatch(feedFail(error));
        });
    }
}


export const feedSuccess = () => {
    return {
        type: actionTypes.FEED_SUCCESS,
    }
}


export const feedFail = (error) => {
    return {
        type: actionTypes.FEED_FAIL,
        error: error,
    }
}

