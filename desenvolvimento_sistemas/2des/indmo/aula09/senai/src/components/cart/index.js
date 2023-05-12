import { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
} from "react-native"
import { Ionicons } from '@expo/vector-icons'

const clearCart = () => {
    window.localStorage.setItem("precos", 0)
    alert("Carrinho zerado!")
}

export default function Cart() {
    const [mostrarCart, setMostrarCart] = useState(false)
    //pega os precos do localstorage
    const precos = window.localStorage.getItem("precos")
    //converte em um array
    const precosConvertido = precos.split(',')
    let total = 0
    //calcula o total percorrendo o array
    precosConvertido.forEach(item => total += Number(item))
    //debug
    console.log({ precosConvertido, total })

    //altera o estado de mostrar o preco do carrinho, se for true altera para false e vice-versa
    const toggleMostrarCart = () => setMostrarCart(!mostrarCart)

    return (
        <>
            {/* preco */}
            {mostrarCart && (
                <View style={styles.container}>
                    <Text style={styles.clear} onPress={clearCart}>X</Text>
                    <Text onPress={toggleMostrarCart}
                        style={styles.preco}>
                        R${total}.00
                    </Text>
                </View>
            )}
            {/* icone clicavel */}
            {!mostrarCart && (
                <View  style={styles.containerDois}>
                    <Ionicons
                        onPress={toggleMostrarCart}
                        name={'cart'}
                        size={20}
                        color={'white'}
                    />
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 40,
        padding: 10,
        flex: 1,
        top: '10px',
        borderRadius: 10,
        flexDirection: 'row',
        left: '-10px',
        position: 'fixed',
        backgroundColor: 'orange',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 999,
        gap: 10,
    },
    preco: {
        color: '#f1f1f1',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: "center",
    },
    containerDois: {
        width: 60,
        height: 40,
        padding: 10,
        paddingRight: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,
        top: '10px',
        left: '-25px',
        position: 'fixed',
        backgroundColor: 'orange',
        alignItems: 'flex-end',
        zIndex: 999,
    },
    clear: {
        borderRadius: '50%',
        color: '#f1f1f1',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: "center",
    }
})