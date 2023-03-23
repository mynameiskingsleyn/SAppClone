import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const ChatSettingScreen = props => {
    return (
        <View style={style.container}>
            <Text> Chat setting !!</Text>
        </View>
        )
        
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default ChatSettingScreen;