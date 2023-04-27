import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = new useState(0)
  const [altura, setAltura] = new useState(0)
  const [imc, setImc] = new useState(0)
  const [diagnostico, setDiagnostico] = new useState('')

const Calcular = ()=>{
  
  setImc(((peso/ (altura * altura))).toFixed(2))
}


  useEffect(()=>{
    if(imc==0){
      setDiagnostico("") 
    }else if(imc <18.50){
      setDiagnostico("Abaixo do peso") 
    }else if(imc<24.99){
      setDiagnostico("Eutrófico") 
    }else if(imc<29.99){
      setDiagnostico( "Sobrepeso")
    }else if(imc<34.99){
      setDiagnostico("Obesidade grau 1")
    }else if(imc<39.99){
      setDiagnostico("Obesidade grau 2") 
    }else{
      setDiagnostico("Obesidade grau 3")
    }
  }, [imc])
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
            <Text style={styles.imc}>IMC</Text>
            <Image
               style={styles.img_imc}
               source={require('./assets/imc.png')}
            />
        </View>

        <View style={styles.conteudo}>
            <TextInput style={styles.input} placeholder='Digite o seu peso (kg)' onChangeText={text => setPeso(text)}/>
            <TextInput style={styles.input} placeholder='Digite a sua altura(m)'onChangeText={text => setAltura(text)}/>
            <TouchableOpacity style={styles.botao} onPress= {Calcular} >
              <Text style={styles.font}> Cadastrar</Text>
            </TouchableOpacity> 

        </View>

        <View style={styles.resultado}>  
          <Text style={styles.resul_imc}>Imc: {imc}</Text>
          <Text style={styles.resul_diag}>Diagnostico: {diagnostico}</Text>
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
    backgroundColor:'gray',
    width: '100vw',
    height: '10vh',
    position:'absolute',
    top: '0',
    flex:'2',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imc:{
    fontSize:'20px',
    fontWeight: 'bold',
    color:'white'
  },
  img_imc:{
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
    backgroundColor:'#ebab34',
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
