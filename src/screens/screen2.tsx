
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { appStyles } from '../theme/theme';

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: 'mouse', price: 50 },
  { name: 'laptop', price: 1500 }, 
  { name: 'teclado', price: 80 },
  { name: 'monitor', price: 120 },
];

export default function Screen2() {
  const total = products.reduce((sum, product) => sum + product.price, 0);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={appStyles.productItem}>
      <Text style={appStyles.productName}>{item.name}</Text>
      <Text style={appStyles.productPrice}>$ {item.price}</Text>
    </View>
  );

  return (
    <View style={appStyles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<Text style={appStyles.header}>Lista de Productos</Text>}
      />
      <View style={appStyles.totalContainer}>
        <Text style={appStyles.totalText}>Valor total a pagar:</Text>
        <Text style={appStyles.totalValue}>$ {total}</Text>
      </View>
    </View>
  );
}

