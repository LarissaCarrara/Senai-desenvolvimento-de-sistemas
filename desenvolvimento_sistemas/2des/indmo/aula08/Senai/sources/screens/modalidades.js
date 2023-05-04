import React from 'react';
import { StyleSheet, Text, View, Image, Button,Alert,TouchableOpacity } from 'react-native';

export default function modalidades({ navigation, route}) {

    const abrirpagina = (dados) => {
        navigation.navigate('Cursos', { dados });
    }
     const tec = {
        nome:"Técnico em Desenvolvimento de Sistemas",
        duracao: "1200 horas"
     }

     const fic = {
        nome:"Técnico em Desenvolvimento de Sistemas",
        duracao: "1200 horas"
     }

     const cai = {

     }
  
    return(

        
    <View style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.img} source={require("../../assets/logo.png")} />


      </View>
      
      <View style={styles.fic}>
        <TouchableOpacity style={styles.botao} onPress={() => abrirpagina(fic)}>
          <Text style={styles.text}> Formação Inicial e Continuada</Text>
        </TouchableOpacity> 

        <Image style={styles.imagens} source={require("../../assets/imagem1.jpg")} />

      </View>
      <View style={styles.cai}>
        <TouchableOpacity style={styles.botao} onPress={() => abrirpagina(cai)} >
          <Text style={styles.text}> Aprendizagem Industrial</Text>
        </TouchableOpacity> 

        <Image style={styles.imagens} source={require("../../assets/imagem2.jpg")} />

      </View>
      <View style={styles.tec}>
        <TouchableOpacity style={styles.botao} onPress={() => abrirpagina(tec)}>
          <Text style={styles.text}> Técnico</Text>
        </TouchableOpacity> 

        <Image style={styles.imagens} source={require("../../assets/imagem4.jpg")} />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
  },
  header:{
    width:'100vw',
    height:'10vh',
    borderBottomColor:'#d9d8d7',
    borderBottomWidth: '0.1px',
    position:'absolute',
    top: 0,
    alignItems:'center',
    justifyContent:'center'

  },
  img:{
    width: '180px',
    height: '100px'
  },
  fic:{
    width:'90vw',
    height:'100px',
    backgroundColor:"#d9d8d7",
  },
  imagens:{
    width:'100%',
    height:'200px'
  },
  text:{
    fontSize:'20px'
  },
  cai:{
    width:'90vw',
    height:'100px',
    backgroundColor:"#d9d8d7",
    marginTop:'140px'
  },
  tec:{
    width:'90vw',
    height:'100px',
    backgroundColor:"#d9d8d7",
    marginTop:'140px'
  },
});
