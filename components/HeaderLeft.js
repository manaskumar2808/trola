import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


const HeaderLeft = (props) => {
    return (
        <View style={styles.root}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
    }
});

export default HeaderLeft;