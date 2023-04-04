import { useState } from 'react';
import { StyleSheet, Switch, Text, View, Image, ImageComponent } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = ()=>{
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
     
      <Switch value={habilitado}  onValueChange={habilitar} > </Switch>
      
      <Image source={{ uri: (habilitado) ? "https://cdn-icons-png.flaticon.com/512/702/702797.png" :  "https://cdn-icons-png.flaticon.com/512/702/702814.png"}} style={styles.lampada}></Image>

      {/* {
        (!habilitado)
        ?
        <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/702/702814.png"}} style={styles.lampada}></Image>
        :
        <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/702/702797.png"}} style={styles.lampada}></Image>

      } */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    width:'68px',
    height:'68px',
  },
  lampada:{
    width:'125px',
    height:'125px',
  }
});
