import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";


export default function Detalhes() {
  const [item, setItem] = useState({
    nome: "",
    email: "",
    nascimento: "",
    foto: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const storedItem = await getItem("usuario");
      if (storedItem) {
        setItem(JSON.parse(storedItem));
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudo}>
      <Image style={styles.conteudoImagem} source={item.foto} />
        <Text style={styles.text}>Nome: {item.nome}</Text>
        <Text style={styles.text}>Email: {item.email}</Text>
        <Text style={styles.text}>Nascimento: {item.nascimento}</Text>
      </View>
    </SafeAreaView>
  );
 
}

//boxshadow no content
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "100%",
  },
  conteudo: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
  },
  conteudoImagem:{
    width: 200,
    height: 200,
  }
});
