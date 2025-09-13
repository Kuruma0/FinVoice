import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You pressed the button.');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>This is the beginning of your app!</Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});