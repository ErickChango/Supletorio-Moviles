import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { appStyles } from '../theme/theme';

const Screen1 = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>¡Bienvenido!</Text>
      <View style={appStyles.buttonContainer}>
        <Button
          title="Ver Productos"
          onPress={() => navigation.navigate('Products')}
        />
        <Button
          title="Ver Acumulador"
          onPress={() => navigation.navigate('Counter')}
        />
      </View>
    </View>
  );
};

export default Screen1;