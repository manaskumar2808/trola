import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../store/index';

import FeedTile from './UI/FeedTile';

const FeedList = props => {
    const dispatch = useDispatch();
    const feeds = useSelector(state => state.pst.feeds);

    useEffect(() => {
        dispatch(actions.fetchFeeds());
        console.log(feeds);
    }, []);

    return (
        <View style={styles.root}>
            <FlatList
                style={styles.list} 
                data={feeds}
                keyExtractor={item => item.id.toString()}
                renderItem={
                    itemData => (
                        <FeedTile 
                            title={itemData.item.title}
                            content={itemData.item.content}
                            imageUrl={itemData.item.imageUrl}
                            videoUrl={itemData.item.videoUrl}
                            image={itemData.item.image}
                            userName={itemData.item.creator.userName}
                            profileImageUrl={itemData.item.creator.profileImageUrl}
                        />
                    )
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        padding: 0,
        margin: 0,
    },
    list: {
        padding: 0,
        margin: 0,
    },
});

export default FeedList;