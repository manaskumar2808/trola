import React, { Profiler } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { FontAwesome, Ionicons, FontAwesome5, Fontisto } from '@expo/vector-icons';

import CommentInputTile from './CommentInputTile';
import CircularProfileItem from './CircularProfileItem';
import Colors from '../../constants/Colors';

const FeedTile = props => {

    const submitComment = () => {

    }

    const iconSize = 23;
    const iconColor = Colors.milk;

    const fallbackImageUrl = "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_960_720.jpg";

    let show = null;
    if(props.imageUrl && props.imageUrl.trim().length >=0){
        show = (
            <Image 
                style={styles.image}
                resizeMode="cover"
                source={{uri: props.imageUrl}}
            />
        );
    } else if(props.image && props.image.trim().length >=0) {
        show = (
            <Image 
                style={styles.image}
                resizeMode="cover"
                source={{uri: props.image}}
            />
        );
    } else if(props.videoUrl && props.videoUrl.trim().length >=0) {
        show = (
            <Image 
                style={styles.image}
                resizeMode="cover"
                source={{uri: fallbackImageUrl}}
            />
        );
    } else {
        show = (
            <Image 
                style={styles.image}
                resizeMode="cover"
                source={{uri: fallbackImageUrl}}
            />
        );
    }


    return (
        <View style={styles.root}>
            <View style={styles.feedHeader}>
                <View style={styles.feedHeaderLead}>
                    <CircularProfileItem  
                        imageUrl={props.profileImageUrl}
                        radius={20}
                    />
                </View>
                <View style={styles.feedHeaderContent}>
                    <Text style={styles.userName}>
                        {props.userName}
                    </Text>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                </View>
                <View style={styles.feedHeaderTrail}>
                    <Ionicons 
                        name="md-more"
                        color={iconColor}
                        onPress={() => {}}
                        size={iconSize}
                    />
                </View>
            </View>
            <View style={styles.feedImage}>
                    {show}
            </View>
            <View style={styles.feedFooter}>
                <View style={styles.reviewIconContainer}>
                    <View style={styles.reviewPart1}>
                        <View style={styles.reviewIcon}>
                        <Fontisto 
                            name="heart-alt" 
                            size={iconSize} 
                            color={iconColor}
                            onPress={() => {}}
                        />
                        </View>
                        <View style={styles.reviewIcon}>
                        <Fontisto 
                            name="comment" 
                            size={iconSize} 
                            color={iconColor}
                            onPress={() => {}}
                        />
                        </View>
                        <View style={styles.reviewIcon}>
                            <FontAwesome 
                                name="send" 
                                size={iconSize} 
                                color={iconColor} 
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                    <View style={styles.reviewPart2}>
                        <View style={styles.gap}></View>
                        <View style={styles.reviewIcon}>
                            <FontAwesome5 
                                name="bookmark" 
                                size={iconSize} 
                                color={iconColor}
                                onPress={() => {}} 
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.likeCountContainer}>
                    <Text style={styles.likeCount}>
                        0 likes  
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>
                        <Text style={{color: "#fff", fontSize: 17}}>{props.userName}</Text> {props.content}
                    </Text>
                </View>
                <View style={styles.commentContainer}>
                    <CommentInputTile 
                        profileImageUrl={props.profileImageUrl}
                        submitComment={submitComment}
                    />
                </View>
            </View>
        </View>
    );
}


FeedTile.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    videoUrl: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
    userName: PropTypes.string,
    profileImageUrl: PropTypes.string,
}


const styles =StyleSheet.create({
    root: {
        width: "100%",
        padding: 0,
        margin: 0,
    },
    feedHeader: {
        height: 70,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    feedHeaderLead: {
        marginHorizontal: 10,
    },
    feedHeaderContent: {
        flex: 1,
    },
    userName: {
        fontSize: 17,
        color: "#fff",
    },
    title: {
        fontSize: 13,
        color: Colors.milk,
    },
    feedHeaderTrail: {
        width: 20,
    },
    feedImage: {
        height: 450,
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    feedFooter: {
        width: "100%",
    },
    reviewIconContainer: {
        paddingVertical: 10,
        width: "100%",
        flexDirection: "row",
    },
    reviewPart1: {
        width: "35%",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    reviewPart2: {
        width: "65%",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
    },
    gap: {
        flex: 4,
    },
    reviewIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    likeCountContainer: {
        width: "100%",
        paddingHorizontal: 10,
        justifyContent: "flex-start",
    },
    likeCount: {
        color: Colors.milk,
    },
    contentContainer: {
        width: "100%",
        padding: 10,
        justifyContent: "flex-start",
    },
    content: {
        color: Colors.milk,
        fontSize: 15,
    },
    commentContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});


export default FeedTile;