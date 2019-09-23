import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';

import HomeScreen from './src/screens/homeScreen/HomeScreen';
import AppNavigator   from './src/navigation/AppNavigator';

class App extends React.Component {
  render() {
    return(
      <AppNavigator />
    );    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCFD',
    paddingTop: 24,
  },
});

export default App;
