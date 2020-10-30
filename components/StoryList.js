import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import StoryTile from '../components/UI/StoryTile';

import * as actions from '../store/index';

const StoryList = props => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usr.users);

    useEffect(() => {
        console.log("rendering story list");
        dispatch(actions.fetchUsers());
    },[]);

    return (
        <View style={styles.root}>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                data={users}
                renderItem={itemData => 
                    <StoryTile 
                        profileImageUrl={itemData.item.profileImageUrl} 
                        userName={itemData.item.userName}
                        radius={35} 
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        paddingVertical: 10,
        paddingHorizontal: 2,
        flexDirection: "row",
        alignItems: "center",
    }
});

export default StoryList;