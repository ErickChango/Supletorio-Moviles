import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';


const Stack = createNativeStackNavigator();

function App() {
  return (
   
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Screen1} options={{ title: 'Bienvenido' }} />
        <Stack.Screen name="Products" component={Screen2} options={{ title: 'Lista de Productos' }} />
        <Stack.Screen name="Counter" component={Screen3} options={{ title: 'Acumulador' }} />
      </Stack.Navigator>
  );
}

export default App;