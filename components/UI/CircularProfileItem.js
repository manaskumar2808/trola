import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
} from 'react-native';

const CircularProfileItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={{
                ...styles.root, 
                height: props.radius*2, 
                width: props.radius*2, 
                borderRadius: props.radius,
                elevation: props.elevation,
            }}>
                <Image 
                    source={ props.imageUrl ? {uri: props.imageUrl} : require('../../assets/user.png')}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
        </TouchableNativeFeedback>
    );
}

CircularProfileItem.propTypes = {
    imageUrl: PropTypes.string,
    radius: PropTypes.number,
    elevation: PropTypes.number,
    onPress: PropTypes.func,
}

const styles = StyleSheet.create({
    root: {
        overflow: "hidden",
    },
    image: {
        height: "100%",
        width: "100%",
    },
});

export default CircularProfileItem;