import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const CircularProfileItem = (props) => {
    let content = (
        <Image 
            source={ props.imageUrl ? {uri: props.imageUrl} : require('../../assets/user.png')}
            resizeMode="cover"
            style={{
                ...styles.image,
                borderRadius: props.radius,
            }}
        />
    );
    if(props.haveBorder){
        content = (
            <LinearGradient 
                colors={['#00effc','#03c0ff','#0072fc','#6900fc']} 
                style={{
                    ...styles.styledBorder,
                    borderRadius: props.radius,
                }}
                start={{x:0, y:1}}
                end={{x:1, y:0}}
            >
                <View style={{
                    ...styles.gap,
                    borderRadius: props.radius,
                }}>
                    <Image 
                        source={ props.imageUrl ? {uri: props.imageUrl} : require('../../assets/user.png')}
                        resizeMode="cover"
                        style={{
                            ...styles.image,
                            borderRadius: props.radius,
                        }}
                    />
                </View>
            </LinearGradient>
        );
    }

    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={{
                ...styles.root, 
                height: props.radius*2, 
                width: props.radius*2, 
                borderRadius: props.radius,
                elevation: props.elevation,
            }}>
                {content}
            </View>
        </TouchableNativeFeedback>
    );
}

CircularProfileItem.propTypes = {
    imageUrl: PropTypes.string,
    radius: PropTypes.number,
    elevation: PropTypes.number,
    haveBorder: PropTypes.bool,
    onPress: PropTypes.func,
}

const styles = StyleSheet.create({
    root: {
        overflow: "hidden",
    },
    styledBorder: {
        padding: 1.5,
        overflow: "hidden",
    },
    gap:{
        padding: 2.5,
        backgroundColor: Colors.background,
    },  
    image: {
        height: "100%",
        width: "100%",
    },
});

export default CircularProfileItem;