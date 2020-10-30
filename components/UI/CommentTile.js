import React,{useEffect, useState} from 'react';
import axiosComment from '../../api/axios-comment';
import axiosLike from '../../api/axios-like';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import * as actions from '../../store/index';

import Colors from '../../constants/Colors';

import CircularProfileImage from './CircularProfileItem';
import ReplyTile from './ReplyTile';

import { useDispatch, useSelector } from 'react-redux';

const CommentTile = props => {
    const [replies,setReplies] = useState([]);

    const iconColor = Colors.grey;
    const userId = useSelector(state => state.ath.userId);
    const currentUser = useSelector(state => state.usr.currentUser);

    const [showReplies, setShowReplies] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        axiosLike.get(`${props.id}/comment/likes/${userId}/`)
        .then(response => {
            setIsLiked(response.data.isLiked);
        }).catch(error => {
            console.log('comment likes fetch failed!');
        });

        axiosLike.get(`${props.id}/comment/likes/count/`)
        .then(response => {
            setLikes(response.data.count);
        }).catch(error => {
            console.log('comment likes count failed!');
        });
    } ,[]);

    const like = () => {
        if(isLiked){
            setIsLiked(false);
            setLikes(prevState => prevState - 1);
            axiosLike.delete(`${props.id}/comment/unlike/${userId}/`)
            .then(response => {

            }).catch(error => {
                console.log(error);
                setIsLiked(true);
                setLikes(prevState => prevState + 1);
            });
        } else {
            setIsLiked(true);
            setLikes(prevState => prevState + 1);
            const likeData = {
                parent: 'comment',
                comment: props.id,
                liker: {
                    userName: currentUser.userName,
                    email: currentUser.email,
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    profileImageUrl: currentUser.profileImageUrl,
                    phoneNo: currentUser.phoneNo,
                    user: userId,
                },
            }
            axiosLike.post('create/',likeData)
            .then(response => {

            }).catch(error => {
                console.log(error);
                setIsLiked(false);
                setLikes(prevState => prevState - 1);
            });
        }
    }

    const fetchReplies = () => {
        if(!showReplies){
            axiosComment.get(`${props.id}/replies/`)
            .then(response => {
                setRepliesFunc(response.data);
            })
            .catch(error => {
                console.log('fetch replies error');
                setShowReplies(false);
                props.setApiError(true);
            });
        } else {
            setShowReplies(false);
        }
    }

    const setRepliesFunc = (replies) => {
        const loadedReplies = [];
        for(let key in replies){
            loadedReplies.push({
                id: replies[key].id,
                text: replies[key].text,
                comment: replies[key].comment,
                replier: replies[key].replier,
            });
        }
        setReplies(loadedReplies);
        setShowReplies(true);
    }
    

    return (
        <View style={styles.root}>
            <View style={styles.commentContent}>
                <View style={styles.profileImageContainer}>
                    <CircularProfileImage imageUrl={props.profileImageUrl} haveBorder={true} radius={25} />
                </View>
                <View style={styles.commentTextContainer}>
                    <View style={{paddingTop: 1,marginVertical: 5}}>
                        <Text style={styles.commentText}>
                            <Text style={styles.userName}>
                                {props.userName}{' '}
                            </Text>
                            {props.commentText}
                        </Text>
                    </View>
                    <View style={styles.commentInfo}>
                        <View style={styles.commentInfoItem}>
                            <Text style={styles.commentInfoText}>
                                1h
                            </Text>
                        </View>
                        <View style={styles.commentInfoItem}>
                            <Text style={styles.commentInfoText}>
                                {likes} likes
                            </Text>
                        </View>
                        <View style={styles.commentInfoItem}>
                            <Text style={styles.commentInfoText}>
                                reply
                            </Text>
                        </View>
                    </View>
                    {
                        props.isDescription ? 
                        null : 
                        <View style={styles.repliesContainer}>
                            <Button 
                                title={ showReplies ? "-------Hide replies" : "-------View replies"}
                                type="clear"
                                buttonStyle={styles.viewReplyButton}
                                titleStyle={{color: Colors.grey, fontSize: 14}}
                                onPress={fetchReplies}
                            />
                        </View>
                    }
                </View>
                <View style={styles.commentAction}>
                    <AntDesign 
                        name={isLiked ? "heart" : "hearto"} 
                        size={13}
                        color={isLiked ? Colors.heartRed : iconColor}
                        onPress={like}
                    />
                </View>
            </View>
            <View style={styles.replyArea}>
                {
                    showReplies ? 
                    // <FlatList 
                    //     data={replies}
                    //     renderItem={itemData => 
                    //         <ReplyTile 
                    //             id={itemData.item.id}
                    //             replyText={itemData.item.text}
                    //             userName={itemData.item.replier.userName}
                    //             profileImageUrl={itemData.item.replier.profileImageUrl}
                    //         />
                    //     }
                    // />
                    replies.map(reply => {
                        return (
                            <ReplyTile
                                key={reply.id} 
                                id={reply.id}
                                replyText={reply.text}
                                userName={reply.replier.userName}
                                profileImageUrl={reply.replier.profileImageUrl}
                            />
                        );
                    })
                    : 
                    null

                }
            </View>
                            
            
        </View>
    );
}


CommentTile.propTypes = {
    id: PropTypes.string,
    userName: PropTypes.string,
    profileImageUrl: PropTypes.string,
    commentText: PropTypes.string,
    isLiked: PropTypes.bool,
    isDescription: PropTypes.bool,
    setApiError: PropTypes.func,
}

const styles = StyleSheet.create({
    root: {
        marginVertical: 10,
    },
    commentContent: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
    profileImageContainer: {
        marginHorizontal: 10,
    },
    commentTextContainer: {
        flex: 1,
    },
    userName: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 14,
    },
    commentText: {
        color: Colors.milk,
        fontSize: 14,
    },
    commentAction: {
        margin: 5,
    },
    commentInfo: {
        flexDirection: "row",
        marginVertical: 5,
    },
    commentInfoItem: {
        marginHorizontal: 5,
    },
    commentInfoText: {
        color: Colors.grey,
        fontSize: 14,
    },
    repliesContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginVertical: 10,
    },
    replyArea: {
        width: "100%",
        paddingLeft: 40,
    }
});

export default CommentTile;