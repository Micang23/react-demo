import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import  colors from '../config/colors';

function SignUp({ navigation }) {

    const onRegister = () => console.log('On Register!');
    const onBack = () => navigation.goBack();
    const textPressed = () => console.log('is text pressed');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{flexDirection: 'column'}}
                showsVerticalScrollIndicator={false}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    onPress={textPressed}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    keyboardType="email-address"/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry={true}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Confirm Password"
                    secureTextEntry={true}/>
                    
                <TouchableOpacity
                    onPress={onRegister}
                    style={styles.registerButton}>
                    <Text style={styles.textButton}>REGISTER</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity
                    onPress={onBack}
                    style={styles.goBackButton}>
                    <Text style={styles.textButton}>Back</Text>
                </TouchableOpacity>
            </ScrollView>
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
    registerButton: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginBottom: 10
    },
    textButton: {
        color: colors.white,
        fontWeight: "bold"
    },
    goBackButton: {
        height: 50,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    }
})

export default SignUp;