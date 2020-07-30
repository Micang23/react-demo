import React from 'react';
import { Image, StyleSheet, View, Platform, StatusBar } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    console.log('Image: ', props)
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode="contain"
                style={styles.image} 
                source={require('../assets/chair.jpg')}/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        color: colors.white
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 20,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 20,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%",
    }
})

export default ViewImageScreen;