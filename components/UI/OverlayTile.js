import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Overlay, Button, colors } from 'react-native-elements';
import Colors from '../../constants/Colors';

const OverlayTile = props => {
    const titleStyles = [styles.title];
    const bodyStyles = [styles.body];
    const buttonStyles = [styles.button];
    const buttonTitleStyles = [styles.buttonTitle];

    switch(props.type){
        case 'success': 
            titleStyles.push(styles.titleSuccess);
            buttonStyles.push(styles.buttonSuccess);
            buttonTitleStyles.push(styles.buttonTitleSuccess);
            break;
        case 'failure':
            titleStyles.push(styles.titleFailure);
            buttonStyles.push(styles.buttonFailure);
            buttonTitleStyles.push(styles.buttonTitleFailure);
            break;
        default:
            break;
    }


    return (
        <Overlay isVisible={props.isVisible} overlayStyle={styles.root} onBackdropPress={props.toggleOverlay}>
            <View styles={styles.content}>
                <Text style={titleStyles}>
                    {props.title}
                </Text>
                <View style={styles.bodyContainer}>
                    <Text style={bodyStyles}>
                        {props.body}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title={props.buttonText}
                        type="outline"
                        buttonStyle={buttonStyles}
                        titleStyle={buttonTitleStyles}
                        onPress={props.toggleOverlay}
                    />
                </View>
            </View>
        </Overlay>
    );
}


OverlayTile.propTypes = {
    isVisible: PropTypes.bool,
    toggleOverlay: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string,
    buttonText: PropTypes.string,
    type: PropTypes.string,
};

const styles = StyleSheet.create({
    root: {
        width: "80%",
        padding: 10,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: Colors.secondary,
    },
    content: {
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.secondary,
    },
    title: {
        fontSize: 18,
        color: "#fff",
    },
    titleSuccess: {
        color: Colors.success,
    },
    titleFailure: {
        color: Colors.danger,
    },  
    body: {
        fontSize: 14,
        color: Colors.milk,
    },
    bodyContainer: {
        width: "100%",
        marginVertical: 10,
    },
    buttonContainer: {
        width: "100%",
    },
    button: {
        width: "100%",
        borderColor: Colors.white,
    },
    buttonSuccess: {
        borderColor: Colors.success,
    },
    buttonFailure: {
        borderColor: Colors.milk,
    },
    buttonTitle: {
        color: Colors.milk,
    },
    buttonTitleSuccess: {
        color: Colors.success,
    },
    buttonTitleFailure: {
        color: Colors.milk,
    }
});

export default OverlayTile;