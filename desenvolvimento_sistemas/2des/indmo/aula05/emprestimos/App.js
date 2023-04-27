import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = new useState(0)
  const [valorTotal, setValorTotal] = new useState(0)
  const [juros, setJuros] = new useState(0)
  const [parcelas, setParcelas] = new useState(0)
  const [Valorparcelas, setValorParcelas] = new useState(0)

const Calcular = ()=>{
  
  setValorTotal(((valor * ((1 + (juros/100)) ** parcelas).toFixed(2))))
}


  useEffect(()=>{
    if(valorTotal!= 0){
      setValorParcelas(valorTotal/parcelas) 
    }
  }, [valorTotal])
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
            <Text style={styles.tit}>Emprestimo</Text>
            <Image
               style={styles.img_moeda}
               source={require('./assets/moeda.png')}
            />
        </View>

        <View style={styles.conteudo}>
            <TextInput style={styles.input} placeholder='Valor necessário' onChangeText={text => setValor(text)}/>
            <TextInput style={styles.input} placeholder='Taxa de juros'onChangeText={text => setJuros(text)}/>
            <TextInput style={styles.input} placeholder='Número de parcelas'onChangeText={text => setParcelas(text)}/>
            <TouchableOpacity style={styles.botao} onPress= {Calcular} >
              <Text style={styles.font}> Cadastrar</Text>
            </TouchableOpacity> 

        </View>

        <View style={styles.resultado}>  
          <Text style={styles.resul_imc}>Montante: {valorTotal}</Text>
          <Text style={styles.resul_diag}>Valor das parcelas: {Valorparcelas}</Text>
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
    position: 'relative',
  },
  header:{
    backgroundColor:'#aba6bf',
    width: '100vw',
    height: '10vh',
    position:'absolute',
    top: '0',
    flex:'2',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tit:{
    fontSize:'20px',
    fontWeight: 'bold',
    color:'white'
  },
  img_moeda:{
    width:60,
    height:50,
    marginLeft:"10px"
  },
  input:{
    border: '1px solid black',
    width:300,
    height:35,
    marginTop:'20px'
  },
  botao:{
    width:300,
    height:35,
    marginTop:'20px',
    backgroundColor:'#aba6bf',
    alignItems:'center',
    justifyContent:'center',
  },
  font:{
    fontSize:'18px',
    color:"white",
  },
  resultado:{
    width:'100vw',
    height:200,
    position:'absolute',
    bottom: '0px',
    alignItems:'center'
  },
  resul_imc:{
    position:'absolute',
    bottom:'150px',
  },
  resul_diag:{
    position: 'absolute',
    bottom: '120px'
  }
});
