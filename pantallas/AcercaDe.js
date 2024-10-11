import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AcercaDe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de Nosotros</Text>
      <Image source={require('../assets/11.png')} style={styles.logo} />
      <Text>Síguenos en nuestras redes sociales.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default AcercaDe;
