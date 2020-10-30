import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { createTabNavigator } from 'react-navigation-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';

import Colors from '../constants/Colors';

import * as actions from '../store/index';

import CircularProfileItem from '../components/UI/CircularProfileItem';
import ProfileTabs from '../components/ProfileTabs';



const ProfileScreen = props => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.ath.userId);
    const currentUser = useSelector(state => state.usr.currentUser);

    useEffect(() => {
        console.log("fetching current user");
        dispatch(actions.fetchCurrentUser(userId));
    },[]);

    return (
        <View style={styles.root}>
            <View style={styles.profileTop}>
                <View style={styles.profilePicContainer}>
                    <CircularProfileItem imageUrl={currentUser.profileImageUrl} radius={45} />
                    <View style={styles.profileNameContainer}>
                        <Text style={styles.profileName}>
                            {currentUser.firstName} {currentUser.lastName}
                        </Text>
                    </View>
                </View>
                <View style={styles.profileSocial}>
                    <View style={styles.profileSocialItem}>
                        <Text style={styles.count}>0</Text>
                        <Text style={styles.label}>Posts</Text>
                    </View>
                    <View style={styles.profileSocialItem}>
                        <Text style={styles.count}>0</Text>
                        <Text style={styles.label}>Followers</Text>
                    </View>
                    <View style={styles.profileSocialItem}>
                        <Text style={styles.count}>0</Text>
                        <Text style={styles.label}>Following</Text>
                    </View>
                </View>
            </View>
            <View style={styles.editButtonContainer}>
                <Button 
                    type="outline"
                    title="Edit Profile"
                    buttonStyle={styles.editButton}
                    titleStyle={{color: Colors.milk}}
                />
            </View>
            <ProfileTabs />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    profileTop: {
        flexDirection: "row",
        padding: 10,
    },
    profilePicContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    profileNameContainer: {
        marginTop: 10,
    },
    profileName: {
        color: Colors.milk,
        fontSize: 15,
    },
    profileSocial: {
        flex: 1,
        flexDirection: "row",
    },
    profileSocialItem: {
        width: "33.333333%",
        justifyContent: "center",
        alignItems: "center",
    },
    count: {
        color: Colors.milk,
        fontSize: 16,
    },
    label: {
        color: Colors.milk,
        fontSize: 16,
    },
    editButtonContainer: {
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    editButton: {
        borderColor: "#9a989c",
        paddingVertical: 5,
    },
});

export default ProfileScreen;