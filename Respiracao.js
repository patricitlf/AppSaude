import React from 'react';
import { Button, View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';

import FundoImage from './assets/5444096.jpg'; 

const tecnicasDeRespiracao = [
  { id: '1', nome: 'Respiração Diafragmática', descricao: 'Sente-se ou deite-se confortavelmente, coloque uma mão sobre o peito e a outra sobre o abdômen. Inspire profundamente pelo nariz, sentindo o abdômen se expandir. Expire lentamente pela boca.' },
  { id: '2', nome: 'Respiração 4-7-8', descricao: 'Inspire pelo nariz durante 4 segundos, segure a respiração por 7 segundos e depois expire pela boca lentamente durante 8 segundos.' },
  { id: '3', nome: 'Respiração Alternada pelas Narinas', descricao: 'Feche a narina direita e inspire pela narina esquerda. Depois, feche a narina esquerda e expire pela narina direita. Alterne e repita.' },
  { id: '4', nome: 'Respiração Contada', descricao: 'Inspire lentamente contando até 5, e depois expire lentamente contando até 5 novamente. Concentre-se na contagem para acalmar a mente.' },
];

export default function Respiracao({ navigation }) {
  return (
    <ImageBackground source={FundoImage} style={styles.fundo}>
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Técnicas de Respiração</Text>
        <FlatList
          data={tecnicasDeRespiracao}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate('Descricao', { descricao: item.descricao, nome: item.nome })}
            >
              <Text style={styles.textoBotao}>{item.nome}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%', 
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
