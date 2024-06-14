import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AppRoutes } from './_types/navigation';

import Login from '../views/auth/login';
import Register from '../views/auth/register';
import Home from '../views/app/home';
import BookUnity from '../views/app/book';

const Stack = createStackNavigator<AppRoutes>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='BookUnity' component={BookUnity} options={({route}) => ({title: route.params.book.title, headerShown: true})}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;