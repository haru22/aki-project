import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';

const ChatStack = createStackNavigator({ Chat: ChatScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createSwitchNavigator(
{
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,

  Auth: LoginScreen,
  Chat: ChatScreen,
},
{
  initialRouteName: 'Auth',
}
);

