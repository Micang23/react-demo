import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import colors from '../config/colors';

function SignIn(props) {
    const onLogIn = () => props.navigation.navigate('Image', { name: 'Image' });
    const onRegister = () => props.navigation.navigate('Sign Up', {name: 'Sign Up'});

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={{flexDirection: 'column'}}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    keyboardType="email-address"/>
                    
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