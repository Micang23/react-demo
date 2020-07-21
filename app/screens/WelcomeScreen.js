import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';

function WelcomeScreen({ navigation }) {
    const onSignIn = () => navigation.navigate('Image', { name: 'Image' });
    const onSignUp = () => console.log('Sign Up');

    return (
        <ImageBackground 
          style={styles.background}
          source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <Button
                title="Sign In" 
                color="#fc5c65"
                style={styles.loginButton}
                onPress={onSignIn}/>
            <Button
                title="Sign Up" 
                color="#4ecdc4"
                onPress={onSignUp}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center"
    },
    logo: {
        height: 100,
        width: 100,
        marginBottom: 15
    },
    text: {
        fontSize: 20
    },
    loginButton: {
        alignSelf: "stretch",
        height: 70,
        backgroundColor: "#fc5c65",
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    }
})

export default WelcomeScreen;