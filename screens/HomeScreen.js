import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';


const HomeScreen = props => {
    useEffect(() => {
        console.log("Inside Home Screen");
    },[]);

    return (
        <View style={styles.root}>
            <View style={styles.centerText}>
                <Text style={{color: "#fff"}}>Welcome Screen</Text>
            </View>
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
    centerText: {
        borderWidth: 1,
        borderColor: "#fff",
        padding: 20,
    },
});


export default HomeScreen;