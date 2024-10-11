import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pantallas/HomeScreen';
import AcercaDe from './pantallas/AcercaDe';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AcercaDe" component={AcercaDe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
