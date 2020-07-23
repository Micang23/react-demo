import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import  colors from '../config/colors';

function SignIn({navigation}) {

    const onLogIn = () => navigation.navigate('Image', { name: 'Image' });
    const onRegister = () => navigation.navigate('Sign Up', {name: 'Sign Up'});

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: 'column'}}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"/>
                    
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"/>
                    
                <TouchableOpacity
                    onPress={onLogIn}
                    style={styles.loginButton}>
                    <Text style={styles.textLogin}>LOG IN</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity
                    onPress={onRegister}
                    style={styles.registerButton}>
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: Platform.OS === "android" ? 20 : 0,
        backgroundColor: colors.white,
        flex: 1,
    },
    logo: {
        marginTop: 40,
        alignItems: "center",
        alignSelf: "center",
        height: 100,
        width: 100,
        marginBottom: 30
    },
    textInput: {
        backgroundColor: colors.fadeWhite,
        height: 50,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginBottom: 20
    },
    loginButton: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    textLogin: {
        color: colors.white,
        fontWeight: "bold"
    },
    registerButton: {
        height: 50,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    }
})

export default SignIn;