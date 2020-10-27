import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../constants/Colors';

const SplashScreen = props => {
    useEffect(() => {
        console.log("Inside Splash Screen");
        AsyncStorage.getItem('userData')
        .then(response => {
            console.log(response);
            const userData = JSON.parse(response);
            console.log(userData);
            if(userData.token && userData.userId){
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