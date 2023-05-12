import { useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"


export default function Salvos() {
    const [produtos, setProdutos] = useState([])

    const recebeProdutosDoLocalStorage = () => {
        const strProdutos = window.localStorage.getItem("produtos")
        const objProdutos = JSON.parse(strProdutos)
        setProdutos(state => [...state, ...objProdutos])
    }
    useEffect(()=>{
        recebeProdutosDoLocalStorage()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                
            </Text>
            <FlatList
                data={produtos}
                renderItem={({ item }) => {

                    return (
                        <View>
                            <Text>{item.produto}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#121214',
        fontSize: 20,
        fontWeight: 'bold',

    },
})