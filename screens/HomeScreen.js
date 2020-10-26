import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';


const HomeScreen = props => {
    render (
        <View style={styles.root}>
            <Text style={{color: "#fff"}}>Welcome To Home Screen</Text>
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


export default HomeScreen;