/**
 * My To Do List App
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';

const Stack = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;