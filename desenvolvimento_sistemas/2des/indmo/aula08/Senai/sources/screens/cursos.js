import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, FlatList } from 'react-native';

export default function Cursos({ navigation, route }) {

    const curso = route.params.dados
    console.log(curso)
    return (
        <View style={styles.container}>
       
            <Text> {curso.tipo} </Text>
           
           <FlatList
            data= {curso.cursos}
            renderItem={({item}) => <View style={styles.view}>
                <Text> Nome do curso: {item.nome}</Text>
                <Text> Modalidade: {item.modalidade}</Text>
            </View>}>

            
           </FlatList>
       
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      position: 'relative',
    },
    view:{
         width: '90vw',
         height: '100px',
         backgroundColor: "#d9d8d7",
         marginTop: '20px'
        
    }

})