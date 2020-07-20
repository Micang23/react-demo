
import React from 'react';
import {
  View,
} from 'react-native';

export default function App() {

  return (
    <View style={{
      backgroundColor: "#aaa",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      flexWrap: "wrap"
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flexShrink: 1,
        width: 400,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
      }}/>
    </View>

  );
}
