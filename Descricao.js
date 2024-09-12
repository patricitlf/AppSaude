import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Descricao({ route }) {
  const { descricao, nome } = route.params;

  return (
    <ImageBackground 
      source={{ uri: 'https://www.exemplo.com/imagem-fundo.jpg' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});