import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Input, Button, Icon} from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const InputTile = props => {
    const [isObscured, setIsObscured] = useState(true);

    const toggleObscured = () => {
        setIsObscured(prevState => !prevState);
    }

    return (
        <View style={styles.root}>
            <Input 
                placeholder={props.placeholder}
                label={props.label}
                labelStyle={styles.label}
                value={props.value}
                onChangeText={props.setValue}
                inputStyle={styles.input}
                errorStyle={styles.error}
                selectionColor={Colors.primary}
                inputContainerStyle={styles.inputContainer}
                secureTextEntry={props.obscureText && isObscured}
                rightIcon={
                    props.obscureText ? 
                    <Button type="clear" onPress={toggleObscured} icon={<Icon name={ isObscured ? "visibility-off" : "visibility" } size={24} color={Colors.primary} />} /> 
                    : null
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        marginVertical: 0,
    },
    inputContainer: {
        width: "100%",
        height: 60,
        alignItems: "center",
        borderWidth: 0,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.secondary,
        borderRadius: 5,
        borderBottomWidth: 0,
    },
    input: {
        color: "#fff",
        width: "100%",
        borderWidth: 0,
    },
    error: {
        borderColor: Colors.danger,
    },
    label: {
        color: Colors.milk,
        fontSize: 18,
        marginLeft: 10,
    }
});

export default InputTile;