import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';

import Colors from '../constants/Colors';
import InputTile from '../components/UI/InputTile';

const AuthForm = props => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(prevState => !prevState);
    }

    return (
        <View style={styles.root}>
            <InputTile 
                placeholder="Username"
                value={userName}
                setValue={setUserName}
            />
            {
                isLogin ? 
                null :
                <InputTile 
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
            }
            <InputTile 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                obscureText={true}
            />
            {
                isLogin ? 
                null : 
                <InputTile 
                    placeholder="Password Confirm"
                    value={passwordConfirm}
                    setValue={setPasswordConfirm}
                    obscureText={true}
                />
            }
            <View style={styles.buttonContainer}>
                <Button 
                    title={isLogin ? "Login" : "Sign Up"}
                    titleStyle={styles.buttonText}
                    buttonStyle={styles.button}  
                />
            </View>
            <View style={styles.changeContainer}>   
                <Text style={{color: "#fff"}}>
                    {
                        isLogin ? "Create an Account ? " : "Already a Member ?"
                    }
                </Text>
                <Button 
                    type="clear"
                    title={isLogin ? "Sign up" : "Login" }
                    titleStyle={{color: Colors.primary}}
                    onPress={toggleAuthMode}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.background,
        padding: 20,
    },
    buttonContainer: {
        width: "100%",
        marginTop: 10,
    },
    button: {
        width: "100%",
        backgroundColor: Colors.primary,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
    },
    changeContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
    }
});

export default AuthForm;