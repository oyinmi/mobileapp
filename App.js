/* jshint esversion: 6 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createStackNavigator();

export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Mobile Shop', headerTransparent: true }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerTransparent: true }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerTransparent: true }}/>  
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerTransparent: true }} />  
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerTransparent: true }} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}