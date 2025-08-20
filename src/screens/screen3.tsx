
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { appStyles } from '../theme/theme';

export default function Screen3() {

const [count, setCount] = useState(5);

return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Acumulador</Text>
      <Text style={appStyles.value}>{count}</Text>
      <View style={appStyles.buttonContainer}>

        <Button
          title="Aumentar"
          onPress={() => setCount(count + 5)}
        />
       
        <Button
          title="Disminuir"
          onPress={() => setCount(count - 5)}
        />
      </View>
    </View>
  );
}


