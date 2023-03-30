import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

stack=createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={
        {
          headerShow:false
      }}>
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="IssLocation" component={IssLocationScreen}/>
        <stack.Screen name="Meteors" component={MeteorsScreen}/>
        </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}



export default App; 