import React                     from 'react';
import { createSwitchNavigator, createAppContainer, createNavigationContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen               from '../screens/homeScreen/HomeScreen';

const MainStackNavigator = createStackNavigator({
  HomeScreen:                       HomeScreen,
},{
  initialRouteName: 'HomeScreen',
  headerMode: 'none'
});

const AppNavigator = createAppContainer(MainStackNavigator);

export default AppNavigator;