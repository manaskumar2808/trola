import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import * as actions from '../store/index';

import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';

const SplashScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Inside Splash Screen");
        AsyncStorage.getItem('userData')
        .then(response => {
            console.log(response);
            const userData = JSON.parse(response);
            console.log(userData['token']);
            console.log(userData['userId']);
            if(userData['token'] && userData['userId']){
                console.log("dispatching");
                dispatch(actions.authSuccess(
                    userData['token'],
                    userData['userId'],
                    userData['userName'],
                ));
                return userData;
            } else {
                return null; 
            }
        })
        .then(response => {
            console.log("navigating");
            if(response){
                props.navigation.navigate('app'); 
            } else {
                props.navigation.navigate('auth');
            }
        })
        .catch(error => {
            console.log(error);
            props.navigation.navigate('auth'); 
        });
    }, []);

    return (
        <View style={styles.root}>
            <Text style={{color: "#fff",fontSize: 40,}}>Outreach</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
    }
});

export default SplashScreen;