import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as React from 'react'

export default function App() {
  const [correnteTotal, setCorrenteTotal] = React.useState();
  const [comprimento, setComprimento] = React.useState();
  const [correnteEquipamento, setCorrenteEquipamento] = React.useState();
  const [total, setTotal] = React.useState();

const calcular = ()=>{
  if(correnteTotal == 127){
     setTotal (((2 * comprimento * correnteEquipamento)/294.64).toFixed(2))
  }

  if(correnteTotal == 220){
    setTotal (((1.73 * comprimento * correnteEquipamento)/510.4).toFixed(2))
 }

}
  return (
    <View style={styles.container}>
      <Text style = {styles.titulo} >Calculadora para o KAZU</Text>
      <Text style = {styles.formula}>Formula para 127V : B =  (2 x L x I)/294,64</Text>
      <Text style = {styles.formula2}>Formula para 220V : B =  (1,73 x L x I)/510,4</Text>
     
      
      <Text>Digite a corrente total - 127/220v</Text>
      <TextInput
        style={styles.input} onChangeText = {  (val)   =>  setCorrenteTotal(val)} //onChangeText envia o texto para o parâmetro val
        placeholder="Corrente - 127/220v"

      />
      <Text>Digite o comprimento em metros</Text>
      <TextInput
        style={styles.input} onChangeText = { (val) =>   setComprimento(val)   }
        placeholder="Comprimento"
      />

      <Text>Digite a corrente do equipamento</Text>
      <TextInput
        style={styles.input} onChangeText = { (val) =>   setCorrenteEquipamento(val)   }
        placeholder="Corrente"
      />

      <Button title="Calcular" onPress= {  ()=>   calcular()   } style={styles.botao}/>
      <StatusBar style="auto" />

      <Text style={styles.total}>A bitola é de (mm): {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ba9d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
  titulo:{
    fontSize:20,
    position: 'absolute',
    top:90,
  },
  formula:{
    position: 'absolute',
    top: 120,
    left: 60,
  },
  formula2: {
    position: 'absolute',
    top: 140,
    left:60,
  },

  total:{
    position: 'absolute',
    bottom: 150,
    left: 40,
  }

});
