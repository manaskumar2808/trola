import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Keyboard
} from 'react-native';
import { Button, Overlay } from 'react-native-elements';


import * as actions from '../store/index';

import * as validators from '../validators/AuthValidator';

import Colors from '../constants/Colors';
import InputTile from '../components/UI/InputTile';
import OverlayTile from '../components/UI/OverlayTile';
import { useDispatch } from 'react-redux';

const AuthForm = props => {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState();
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [showError, setShowError] = useState(false);

    const [userNameError, setUserNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConfirmError, setPasswordConfirmError] = useState();

    const toggleAuthMode = () => {
        setIsLogin(prevState => !prevState);
    }

    const toggleLoginPrompt = () => {
        setShowLoginPrompt(prevState => !prevState);
    }

    const toggleShowError = () => {
        setShowError(prevState => !prevState);
    }

    const checkValidity = () => {
        console.log("Checking validity...");

        const userNameError = validators.userNameValidator(userName);
        const emailError = validators.emailValidator(email);
        const passwordError = validators.passwordValidator(password);
        const passwordConfirmError = validators.passwordConfirmValidator(passwordConfirm,password);

        let valid = true;

        if(isLogin){
            console.log("Checking validity in login mode...");
            if(userNameError){
                setUserNameError(userNameError);
                valid = false;
            } 
            if(passwordError){
                setPasswordError(passwordError);
                valid = false;
            }
        } else {
            console.log("Checking validity in sign up mode");
            if(userNameError){
                setUserName(userNameError);
                valid = false;
            } 
            if(emailError){
                setEmailError(emailError);
                valid = false;
            }
            if(passwordError){
                setPasswordError(passwordError);
                valid = false;
            }
            if(passwordConfirmError){
                setPasswordConfirmError(passwordConfirmError);
                valid = false;
            }
        }

        return valid;
    }

    const submitAuth = () => {
        Keyboard.dismiss();
        const isValid = checkValidity();
        if(isValid){
            console.log("Form is valid");
            if(isLogin){
                console.log('Logging Dispatch')
                try {
                    dispatch(actions.authLogin(userName,password));
                    props.goToApp();
                } catch (error) {
                    setError(error);
                }
            } else {
                try {
                    dispatch(actions.authSignup(userName,email,password,passwordConfirm));
                    setIsLogin(true);
                    setShowLoginPrompt(true);
                } catch (error) {
                    setError(error);
                }
            }
        } else {
            console.log('Form not Valid!');
            setError("Form Not Valid!");
        }
    }

    return (
        <View style={styles.root}>
            <InputTile 
                placeholder="Username"
                value={userName}
                setValue={setUserName}
                error={userNameError}
            />
            {
                isLogin ? 
                null :
                <InputTile 
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    error={emailError}
                />
            }
            <InputTile 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                error={passwordError}
                obscureText={true}
            />
            {
                isLogin ? 
                null : 
                <InputTile 
                    placeholder="Password Confirm"
                    value={passwordConfirm}
                    setValue={setPasswordConfirm}
                    error={setPasswordConfirmError}
                    obscureText={true}
                />
            }
            <View style={styles.buttonContainer}>
                <Button 
                    title={isLogin ? "Login" : "Sign Up"}
                    titleStyle={styles.buttonText}
                    buttonStyle={styles.button} 
                    onPress={submitAuth} 
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
            {
                error ? 
                <OverlayTile 
                    isVisible={showError}
                    toggleOverlay={toggleShowError}
                    title="Something Went Wrong!"
                    body="Your credentials are not valid."
                    buttonText="Ok"
                    type="failure"
                />
                :
                <OverlayTile 
                    isVisible={showLoginPrompt}
                    toggleOverlay={toggleLoginPrompt}
                    title="Good To See You"
                    body="Login with your new credentials to enjoy the application"
                    buttonText="Alright"
                    type="success"
                />
            }
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
        width: "95%",
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