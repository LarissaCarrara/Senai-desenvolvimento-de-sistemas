import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import cursos_mock from '../mock/mock_cursos'

export default function modalidades({ navigation, route }) {

  const abrirpagina = (dados) => {
    navigation.navigate('cursos', { dados });
  }

  return (


    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={require("../../assets/logo.png")} />


      </View>

    <FlatList
    data= {cursos_mock}
    renderItem={({item}) =>  <TouchableOpacity style={styles.botao} onPress={() => abrirpagina(item)}>
    <Text style={styles.cai}> {item.tipo}</Text>
  </TouchableOpacity>}>

      <View style={styles.cai}>

      
          <TouchableOpacity style={styles.botao} onPress={() => abrirpagina(fic)}>
            <Text style={styles.text}> Formação Inicial e Continuada</Text>
          </TouchableOpacity>

          <Image style={styles.imagens} source={require("../../assets/imagem1.jpg")} />

      </View>
    </FlatList>
 

    </View>//container

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    width: '100vw',
    height: '10vh',
    borderBottomColor: '#d9d8d7',
    borderBottomWidth: '0.1px',
    alignItems: 'center',
    justifyContent: 'center'

  },
  img: {
    width: '180px',
    height: '100px'
  },
  imagens: {
    width: '100%',
    height: '200px'
  },
  text: {
    fontSize: '20px'
  },
  cai: {
    width: '90vw',
    height: '100px',
    backgroundColor: "#d9d8d7",
    marginTop: '20px'
  },
});
