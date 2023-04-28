import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import MaskInput from "react-native-mask-input";

export default function EmprestimoForm() {
    const [valor, setValor] = React.useState(0)
    const [valorTotal, setValorTotal] = React.useState(0)
    const [juros, setJuros] = React.useState(0)
    const [parcelas, setParcelas] = React.useState(0)
    const [Valorparcelas, setValorParcelas] = React.useState(0)
  

    const calcTotal = () => {
        setValorTotal(((valor * ((1 + (juros/100)) ** parcelas).toFixed(2))))
    }
    React.useEffect(()=>{
        if(valorTotal!= 0){
          setValorParcelas(valorTotal/parcelas) 
        }
      }, [valorTotal])
      
    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Emprestimo</Text>

                    <MaskInput
                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setValor(masked)}
                        value={valor}
                        placeholder="Valor necessário"
                        keyboardType="numeric"
                    />

                    <TextInput style={styles.textInput} placeholder='Taxa de juros'onChangeText={text => setJuros(text)}/>
                    {/* <MaskInput
                        mask={[/\d/,/\d/, /\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setJuros(masked)}
                        value={juros}
                        placeholder="Taxa de juros"
                        keyboardType="numeric"
                    /> */}

<MaskInput
                        mask={[/\d/,/\d/]}
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setParcelas(masked)}
                        value={parcelas}
                        placeholder="Número de Parcelas"
                        keyboardType="numeric"
                    />
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={calcTotal}
                    >
                        <Text>Calcular</Text>
                    </TouchableOpacity>
                    <Text>Montante: {valorTotal}</Text>
                    <Text>Valor das parcelas: {Valorparcelas}</Text>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        border: '1px solid black',
        width:300,
        height:35,
        marginTop:'20px'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
});