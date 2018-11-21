import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const ChatStack = createStackNavigator({ Chat: ChatScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen, SignUp: SignupScreen });

export default createSwitchNavigator(
{
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,

  Auth: LoginScreen,
  SignUp: SignupScreen,
  Chat: ChatStack,
},
{
  //initialRouteName: 'Auth',
}
);

