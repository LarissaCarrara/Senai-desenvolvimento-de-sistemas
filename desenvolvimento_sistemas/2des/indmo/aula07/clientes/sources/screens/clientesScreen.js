import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import clientes from '../mocks/clientesMock'

export default function ClientesScreen ({ navigation }){

    const abrirDetalhes = (dados) =>{
        navigation.navigate('Detalhes', {dados});
    }

    console.log(clientes)
    return(
        <View style={styles.container}>
               
            <FlatList  
                data={clientes}
                 renderItem={( { item } ) =>  (
                    <TouchableOpacity 
                        style={styles.item}
                        onPress={() => abrirDetalhes(item)}
                    >
                        <Image style={styles.img} source={item.avatar} />
                        <Text style={styles.text} >Nome: {item.nome} {item.sobrenome}</Text>
                        <Text style={styles.text} >Email: {item.email}</Text>
                        <Text style={styles.text} >Cpf: {item.cpf}</Text>

                    </TouchableOpacity> 
                )}
                keyExtractor={item => item.cpf}
                style={styles.list}
                />
               
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    text:{
        fontSize: 20,
    },
    item: {
        padding: 20,
        shadowOffset: {width:-1, height:1},
        shadowColor: 'black',
        shadowOpacity: 5,
        shadowRadius: 5,
        borderRadius: 10,
        margin: 20,
        gap: 10,
        alignItems: 'center',
        width: '100%',
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 50,
    }
});