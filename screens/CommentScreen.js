import React, { useEffect,useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../store/index';

import CommentTile from '../components/UI/CommentTile';
import Colors from '../constants/Colors';

import { Snackbar } from 'react-native-paper';

const CommentScreen = props => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.cmt.comments);


    const feedId = props.navigation.getParam('feedId');
    
    const [isLoading, setIsLoading] = useState(true);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        try {
            dispatch(actions.fetchFeedComments(feedId));
            setIsLoading(false);
        } catch(error) {
            setIsLoading(false);
        }
    },[]);

    if(isLoading) {
        return (
            <View style={{justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: Colors.background}}>
                <Text style={{color: Colors.milk}}>
                    loading comments...
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.root}>
            <View style={styles.commentArea}>
                <FlatList 
                    data={comments}
                    keyExtractor={item => item.id}
                    renderItem={(itemData) => 
                        <CommentTile
                            id={itemData.item.id} 
                            commentText={itemData.item.text} 
                            profileImageUrl={itemData.item.commentor.profileImageUrl} 
                            userName={itemData.item.commentor.userName} 
                            isLiked={false}
                            setApiError={setApiError}
                        />
                    }
                    ListHeaderComponent={() => (
                        <View style={styles.descriptionBox}>
                            <CommentTile 
                                commentText={props.navigation.getParam('description')}
                                profileImageUrl={props.navigation.getParam('creatorProfileImage')}
                                userName={props.navigation.getParam('creatorUserName')}
                                isLiked={false}
                                isDescription={true}
                            />
                        </View>
                    )}
                />
            </View>
            <Snackbar 
                visible={apiError}
                onDismiss={() => setApiError(false)}
                duration={2000}
                style={{backgroundColor: Colors.secondary}}
                action={{
                    label: "Ok",
                    onPress: () => setApiError(false),
                }}
            >
                <View>
                    <Text style={{color: Colors.milk}}>Cannot fetch the Replies at the moment!</Text>
                </View>
            </Snackbar>
        </View>
    );
}

CommentScreen.navigatioOptions = {
    headerTitle: "Comments",
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    commentArea: {
        padding: 10,
    }
});

export default CommentScreen;