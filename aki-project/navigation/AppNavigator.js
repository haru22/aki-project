import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';

export default createSwitchNavigator(
  {
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Chat: ChatScreen,
    Auth: LoginScreen
  },
  {
    initialRouteName: 'Auth',
  }
);

