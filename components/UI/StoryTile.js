import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors';

import CircularProfileItem from './CircularProfileItem';

const StoryTile = props => {
    return (
        <View style={styles.root}>
            <CircularProfileItem 
                imageUrl={props.profileImageUrl}
                radius={props.radius}
                haveBorder={true}
            />
            <View style={styles.userNameContainer}>
                <Text style={styles.userName} numberOfLines={1}>
                    {props.userName}
                </Text>
            </View>
        </View>
    );
}

StoryTile.propTypes = {
    userName: PropTypes.string,
    profileImageUrl: PropTypes.string,
    radius: PropTypes.number,
}


const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        width: 70,
    },
    userNameContainer: {
        marginVertical: 5,
        width: "80%",
        overflow: "hidden",
    },
    userName: {
        fontSize: 13,
        color: Colors.milk,
    },
});


export default StoryTile;