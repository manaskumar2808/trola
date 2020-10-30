import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

import CircularProfileImage from './CircularProfileItem';

const ReplyTile = props => {
    const iconColor = Colors.grey;

    const like = () => {

    }

    useEffect(() => {
        console.log('fetching replies...');
    },[]);

    return (
        <View style={styles.root}>
            <View style={styles.replyContent}>
                <View style={styles.profileImageContainer}>
                    <CircularProfileImage imageUrl={props.profileImageUrl} haveBorder={true} radius={25} />
                </View>
                <View style={styles.replyTextContainer}>
                    <Text style={styles.replyText}>
                        <Text style={styles.userName}>
                            {props.userName}{' '}
                        </Text>
                        {props.replyText}
                    </Text>
                    <View style={styles.replyInfo}>
                        <View style={styles.replyInfoItem}>
                            <Text style={styles.replyInfoText}>
                                1h
                            </Text>
                        </View>
                        <View style={styles.replyInfoItem}>
                            <Text style={styles.replyInfoText}>
                                0 likes
                            </Text>
                        </View>
                        <View style={styles.replyInfoItem}>
                            <Text style={styles.replyInfoText}>
                                reply
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.replyActions}>
                    <AntDesign 
                        name={props.isLiked ? "heart" : "hearto"} 
                        size={13}
                        color={props.isLiked ? Colors.heartRed : iconColor}
                        onPress={like}
                    />
                </View>
            </View>
        </View>
    );
}


ReplyTile.propTypes = {
    id: PropTypes.string,
    userName: PropTypes.string,
    profileImageUrl: PropTypes.string,
    replyText: PropTypes.string,
    isLiked: PropTypes.bool,
}

const styles = StyleSheet.create({
    root: {
        marginVertical: 10,
    },
    replyContent: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
    profileImageContainer: {
        marginHorizontal: 10,
    },
    replyTextContainer: {
        flex: 1,
    },
    userName: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 14,
    },
    replyText: {
        color: Colors.milk,
        fontSize: 14,
    },
    replyActions: {
        margin: 5,
    },
    replyInfo: {
        flexDirection: "row",
        marginVertical: 5,
    },
    replyInfoItem: {
        marginHorizontal: 5,
    },
    replyInfoText: {
        color: Colors.grey,
        fontSize: 14,
    },
    repliesContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

});

export default ReplyTile;