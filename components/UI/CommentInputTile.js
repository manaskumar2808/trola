import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
} from 'react-native';
import {
    Input,
    Button,
} from 'react-native-elements';
import { useSelector } from 'react-redux';

import CircularProfileItem from './CircularProfileItem';
import Colors from '../../constants/Colors';

const CommentInputTile = props => {
    const [text, setText] = useState('');

    const submitText = () => {
        props.submitComment(text);
        setText('');
    }

    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <CircularProfileItem imageUrl={props.profileImageUrl} radius={15} />
                    <View style={{flex: 1,padding: 0}}>
                        <Input 
                            placeholder="Add Your Message"
                            inputStyle={styles.chatInput}
                            inputContainerStyle={{
                                borderBottomWidth:0,
                                justifyContent:"center",
                                alignItems:"center",
                                paddingTop: 25,
                            }}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <Button 
                        title="Send"
                        type="clear"
                        disabled={text.trim().length <= 0}
                        disabledTitleStyle={{color: Colors.primaryFade}}
                        buttonStyle={styles.sendButton}
                        titleStyle={{color: Colors.primary}}
                        onPress={submitText}
                    />
            </View>

        </View>
    );
}

CommentInputTile.propTypes = {
    profileImageUrl: PropTypes.string,
    submitComment: PropTypes.func,
}


const styles = StyleSheet.create({
    root: {
        width: "100%",
        padding: 10,
    },
    inputContainer: {
        width: "100%",
        borderRadius: 25,
        height: 57,
        paddingHorizontal: 7,
        paddingVertical: 0,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        height: 40,
        color: "#fff",
    },
    sendButton: {
        color: Colors.primary,
    }
});

export default CommentInputTile;