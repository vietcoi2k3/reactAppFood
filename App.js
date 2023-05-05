import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigater/stack';
import Login from './src/component/login';
import SignIn from './src/component/signin';
const Stack = createNativeStackNavigator();
const App = () => {
  
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
              <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
  );
  


};



export default App;
