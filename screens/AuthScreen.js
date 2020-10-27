import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';

import AuthForm from '../components/AuthForm';


const AuthScreen = props => {

    const goToApp = () => {
        props.navigation.navigate('app');
    }

    return (
        <View style={styles.root}>
            <AuthForm goToApp={goToApp} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background,
    },
});

export default AuthScreen;