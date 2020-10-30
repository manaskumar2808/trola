import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import Colors from '../constants/Colors';

import * as actions from '../store/index';

import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import FeedList from '../components/FeedList';
import { Snackbar } from 'react-native-paper';

const HomeScreen = props => {
    const dispatch = useDispatch();
    const [apiError, setApiError] = useState(false);

    const logout = () => {
        dispatch(actions.authLogout());
    }

    const goToComments = (feedId, creatorUserName, creatorProfileImageUrl, description) => {
        props.navigation.navigate('comment',{
            feedId: feedId,
            creatorUserName: creatorUserName,
            creatorProfileImageUrl: creatorProfileImageUrl,
            description: description,
        });
    }       

    return (
        <View style={styles.root}>
            <FeedList setApiError={setApiError} goToComments={goToComments} />
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
                    <Text style={{color: Colors.milk}}>Cannot Like the feed at the moment!</Text>
                </View>
            </Snackbar>
        </View>
    );
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
        padding: 0,
    },
    centerText: {
        borderWidth: 1,
        borderColor: "#fff",
        padding: 20,
    },
    buttonContainer: {
        marginVertical: 20,
    },
    logoutButton: {
        backgroundColor: Colors.danger,
    },
});


export default HomeScreen;