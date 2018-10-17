import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';



export default createSwitchNavigator(
{
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,

  Auth: LoginScreen,
  Chat: ChatScreen,
},
{
  //initialRouteName: 'Auth',
}
);

