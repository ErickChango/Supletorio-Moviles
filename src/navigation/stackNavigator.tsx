import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Bienvenido' }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Screen2' }} />
        <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Screen3' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;