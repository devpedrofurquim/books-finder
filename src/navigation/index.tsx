import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AppRoutes } from './_types/navigation';

import Login from '../views/auth/login';
import Register from '../views/auth/register';
import Home from '../views/app/home';

const Stack = createStackNavigator<AppRoutes>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;