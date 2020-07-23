import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function WelcomeScreen({ navigation }) {
    const onSignIn = () => navigation.navigate('Sign In', { name: 'Sign In' });
    const onSignUp = () => navigation.navigate('Sign Up', { name: 'Sign Up' });

    return (
        <ImageBackground 
          blurRadius={2}
          style={styles.background}
          source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.textTitle}>Sell What You Don't Need</Text>
            </View>
            <TouchableOpacity
                onPress={onSignIn}
                style={styles.loginButton}>
                <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onSignUp}
                style={styles.registerButton}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center",
        alignSelf: "center"
    },
    logo: {
        height: 100,
        width: 100,
        marginBottom: 15
    },
    textTitle: {
        fontSize: 20
    },
    loginButton: {
        height: 70,
        backgroundColor: "#fc5c65",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 20,
    }
})

export default WelcomeScreen;