
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableWithoutFeedback, 
  TouchableNativeFeedback, 
  TouchableHighlight,
  SafeAreaView, 
  Platform, 
  Image, 
  Button,
  Alert,
  StatusBar,
  Dimensions
} from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen'));

  return (
    <SafeAreaView style={styles.container, styles.droidSafeArea}>
      <View style={{
        backgroundColor: 'yellow',
        width: '50%',
        height: '30%'
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});
