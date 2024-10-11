import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [mostrarImagenes, setMostrarImagenes] = useState(false);

  const manejarEnvio = async () => {
    try {
      await axios.post('https://inmobiliaria-lime.vercel.app/contacto', { nombre, email, telefono });
      Alert.alert('Gracias', 'Nos pondremos en contacto contigo pronto.');
      setNombre('');
      setEmail('');
      setTelefono('');
    } catch (error) {
      Alert.alert('Error', 'Error al enviar la información, intenta nuevamente.');
    }
  };

  const manejarDetalles = () => {
    setMostrarDetalles(true);
    setMostrarImagenes(true);
  };

  const manejarCerrarDetalles = () => {
    setMostrarDetalles(false);
    setMostrarImagenes(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Portal Inmobiliario</Text>
        <Button title="Acerca De" onPress={() => navigation.navigate('AcercaDe')} />
      </View>

      <Text style={styles.subtitle}>Nuestras Propiedades</Text>
      <Button title="Casa Garzota" onPress={manejarDetalles} color="#00BFFF" />

      {mostrarDetalles && (
        <>
          {mostrarImagenes && (
            <View style={styles.imageContainer}>
              <Image source={require('../assets/house1.webp')} style={styles.image} />
              <Image source={require('../assets/house2.webp')} style={styles.image} />
              <Image source={require('../assets/house3.webp')} style={styles.image} />
              <Image source={require('../assets/house4.webp')} style={styles.image} />
              <Image source={require('../assets/house5.webp')} style={styles.image} />
            </View>
          )}

          <Text style={styles.description}>
            Esta casa de 210 metros cuadrados está disponible para la venta, ideal para uso comercial.
            Ubicada en una zona estratégica, combina comodidad y versatilidad, perfecta para emprendedores
            que buscan establecer su negocio.
          </Text>

          <Text style={styles.description}>Características:</Text>
          <Text style={styles.description}>Número de habitaciones: 3 Habitaciones</Text>
          <Text style={styles.description}>Espacio exterior: Patio, jardín, balcón, área de lavandería, cisterna</Text>
          <Text style={styles.description}>Estacionamiento: Garage para 1 carro dentro de casa. También se puede parquear afuera</Text>
          <Text style={styles.description}>Servicios cercanos: Transporte público, restaurantes, Cantones, escuelas, supermercados, etc.</Text>
          <Text style={styles.description}>Versatilidad de uso: Ideal para oficinas, consultorios o tiendas.</Text>
          <Text style={styles.description}>Potencial de inversión: Oportunidad para generar ingresos a través del alquiler o desarrollo de negocios.</Text>

          <Text style={styles.subtitle}>Contacto</Text>
          <TextInput 
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
            style={styles.input}
          />
          <TextInput 
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput 
            placeholder="Teléfono"
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
            style={styles.input}
          />
          <Button title="Enviar" onPress={manejarEnvio} color="#00BFFF" />
          <Button title="Cerrar" onPress={manejarCerrarDetalles} color="red" />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'left',
    marginLeft: 10,
    lineHeight: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permitir que las imágenes se ajusten a varias filas
    justifyContent: 'space-between', // Espacio uniforme entre imágenes
    marginVertical: 10,
  },
  image: {
    width: '48%', // Ocupa el 48% del ancho del contenedor
    height: 150, // Altura fija para todas las imágenes
    marginBottom: 10, // Espacio inferior entre filas
    resizeMode: 'cover', // Mantiene la proporción
  },
});

export default HomeScreen;
