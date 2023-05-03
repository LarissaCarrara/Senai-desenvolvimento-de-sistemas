import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import clientes from '../mocks/clientesMock'

export default function ClientesScreen ({ navigation }){
    console.log(clientes)
    return(
        <View style={styles.container}>
            <Text>OI</Text>   
            <FlatList  
                data={clientes}
                renderItem={( { item } ) =>  <Text style={styles.text}>BOra</Text> }
                keyExtractor={item => item.id}
                style={styles.list}
                />
               
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    text:{
        fontSize: 20,
    }
});