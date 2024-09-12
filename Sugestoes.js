import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import FundoImage from './assets/6695913.jpg'; 

const sugestoesAtividades = {
  ansioso: ['Meditação', 'Respiração profunda', 'Praticar Yoga'],
  estressado: ['Organizar o espaço', 'Escrever num diário', 'Leitura relaxante'],
  desmotivado: ['Praticar um hobbie', 'Atividade física', 'Ouvir música'],
};

export default function Sugestoes() {
  const [estadoEmocional, setEstadoEmocional] = useState(null);
  const [atividades, setAtividades] = useState([]);

  const sugerirAtividades = (estado) => {
    setEstadoEmocional(estado);
    setAtividades(sugestoesAtividades[estado]);
  };

  return (
    <ImageBackground source={FundoImage} style={styles.fundo}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Como você está se sentindo?</Text>

        <View style={styles.botoesContainer}>
          <TouchableOpacity
            style={[styles.botao, styles.ansioso]}
            onPress={() => sugerirAtividades('ansioso')}
          >
            <Text style={styles.textoBotao}>Ansioso</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, styles.estressado]}
            onPress={() => sugerirAtividades('estressado')}
          >
            <Text style={styles.textoBotao}>Estressado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, styles.desmotivado]}
            onPress={() => sugerirAtividades('desmotivado')}
          >
            <Text style={styles.textoBotao}>Desmotivado</Text>
          </TouchableOpacity>
        </View>

        {estadoEmocional && (
          <View style={styles.sugestoesContainer}>
            <Text style={styles.subTitulo}>Sugestões para {estadoEmocional}:</Text>
            {atividades.map((atividade, index) => (
              <Text key={index} style={styles.itemTexto}>{atividade}</Text>
            ))}
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    width: '100%',
  },
  botao: {
    width: 120, 
    height: 50, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', 
    marginHorizontal: 5, 
  },
  ansioso: {
    backgroundColor: '#4CAF50',
  },
  estressado: {
    backgroundColor: '#FF9800',
  },
  desmotivado: {
    backgroundColor: '#2196F3',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sugestoesContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    width: '90%',
  },
  subTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemTexto: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
    textAlign: 'center',
  },
});