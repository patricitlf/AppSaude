import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Sugestoes from './Sugestoes';
import Respiracao from './Respiracao';
import Descricao from './Descricao';
import Diario from './Diario';

import FundoImage from './assets/5235382.jpg';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={FundoImage} style={styles.fundo}>
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Sugestões')}
        >
          <Ionicons name="bulb-outline" size={24} color="white" />
          <Text style={styles.textoBotao}>Sugestão de Atividades</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Respiração')}
        >
          <Ionicons name="heart-circle-outline" size={24} color="white" />
          <Text style={styles.textoBotao}>Técnicas de Respiração</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Diario')}
        >
          <Ionicons name="book-outline" size={24} color="white" />
          <Text style={styles.textoBotao}>Diário</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sugestões" component={Sugestoes} />
        <Stack.Screen name="Respiração" component={Respiracao} />
        <Stack.Screen name="Descricao" component={Descricao} />
        <Stack.Screen name="Diario" component={Diario} />
      </Stack.Navigator>
    </NavigationContainer>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    width: '80%',
    borderRadius: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

