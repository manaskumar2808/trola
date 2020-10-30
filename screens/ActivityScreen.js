import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';

const ActivityScreen = props => {
    return (
        <View style={styles.root}>
            <Text style={{color: "#fff"}}>Activity</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: "center",
        flex: 1,
        backgroundColor: Colors.background,
    }
});

export default ActivityScreen;