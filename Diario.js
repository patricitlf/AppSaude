import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, Keyboard, ImageBackground, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Diario() {
  const [entrada, setEntrada] = useState('');
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    carregarEntradas();
  }, []);

  const salvarEntrada = async () => {
    if (entrada.trim()) {
      const novaEntrada = { id: Date.now().toString(), texto: entrada };
      const novasEntradas = [novaEntrada, ...entradas];
      setEntradas(novasEntradas);
      setEntrada('');
      try {
        await AsyncStorage.setItem('@entradas', JSON.stringify(novasEntradas));
        Keyboard.dismiss(); 
      } catch (error) {
        console.error('Erro ao salvar as entradas', error);
      }
    }
  };

  const carregarEntradas = async () => {
    try {
      const entradasSalvas = await AsyncStorage.getItem('@entradas');
      if (entradasSalvas) {
        setEntradas(JSON.parse(entradasSalvas));
      }
    } catch (error) {
      console.error('Erro ao carregar as entradas', error);
    }
  };

  // Função para excluir uma entrada do diário
  const excluirEntrada = async (id) => {
    const novasEntradas = entradas.filter((item) => item.id !== id); // Remove a entrada selecionada
    setEntradas(novasEntradas); // Atualiza o estado com a lista filtrada

    try {
      await AsyncStorage.setItem('@entradas', JSON.stringify(novasEntradas)); // Salva a nova lista no AsyncStorage
    } catch (error) {
      console.error('Erro ao excluir a entrada', error);
    }
  };

  // Função que confirma se o usuário quer excluir a entrada
  const confirmarExclusao = (id) => {
    Alert.alert(
      'Excluir Entrada',
      'Você tem certeza que deseja excluir esta entrada?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: () => excluirEntrada(id) },
      ],
      { cancelable: true }
    );
  };

  // Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.textoItem}>{item.texto}</Text>
      {/* Botão de excluir */}
      <TouchableOpacity onPress={() => confirmarExclusao(item.id)} style={styles.botaoExcluir}>
        <Text style={styles.textoBotaoExcluir}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://drive.google.com/uc?export=view&id=1zhdomzKTTqFZAdpQheHMMVE6Du9R2g3A' }} 
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.overlay}>
          <Text style={styles.titulo}>Diário de Bem-Estar</Text>
          <TextInput
            style={styles.input}
            placeholder="Escreva aqui..."
            value={entrada}
            onChangeText={setEntrada}
            multiline
            blurOnSubmit={false}
          />
          <Button title="Salvar Entrada" onPress={salvarEntrada} color="#4CAF50" />
        </View>

        <FlatList
          data={entradas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.lista}
          keyboardShouldPersistTaps="handled"
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: 20,
    borderRadius: 10,
    margin: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between', 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 150, 
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  item: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    marginVertical: 5,
  },
  textoItem: {
    flex: 1,
    marginRight: 10,
  },
  lista: {
    flex: 1,
  },
  botaoExcluir: {
    backgroundColor: '#ff5c5c',
    padding: 5,
    borderRadius: 5,
  },
  textoBotaoExcluir: {
    color: 'white',
  },
});

