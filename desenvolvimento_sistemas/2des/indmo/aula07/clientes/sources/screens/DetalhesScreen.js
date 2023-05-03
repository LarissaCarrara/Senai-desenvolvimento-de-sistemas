import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';

export default function DetalhesScreen({ navigation, route}) {
    const cliente = route.params.dados
    console.log(route.params)
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={cliente.avatar} />

            <View style={styles.textos}>
                <Text style={styles.text}>CPF: {cliente.cpf}</Text>
                <Text style={styles.text}>Nome: {cliente.nome}</Text>
                <Text style={styles.text}>Email: {cliente.email}</Text>
                <Text style={styles.text}>Telefone: {cliente.telefone}</Text>
                <Text style={styles.text}>Cep: {cliente.cep}</Text>
                <Text style={styles.text}>Numero: {cliente.numero}</Text>
                <Text style={styles.text}>Complemento: {cliente.complemento}</Text>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:20,
    },
    img:{
        width: '50%',
        height: '50%',
    },
    textos:{
        width:'50%'
    },
    text:{
        fontSize:16,
        margin:5,  
    }
})