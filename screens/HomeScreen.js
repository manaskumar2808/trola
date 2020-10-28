import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';

import * as actions from '../store/index';

import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import FeedList from '../components/FeedList';


const HomeScreen = props => {
    let token = useSelector(state => state.ath.token);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(actions.authLogout());
    }

    if(!token){
        props.navigation.navigate('auth');
    }

    return (
        <View style={styles.root}>
            <FeedList />
            {/* <View style={styles.buttonContainer}>
                <Button 
                    title="Logout"
                    type="solid"
                    buttonStyle={styles.logoutButton}
                    titleStyle={{color: "#fff"}}
                    onPress={logout}
                />
            </View> */}
        </View>
    );
}

HomeScreen.navigationOptions = {

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