import React from "react";
import { View, Text, Button } from "react-native";

const QuizScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Perguntas</Text>
      {/* Adicione as perguntas e alternativas aqui */}
      <Button
        title="Finalizar Teste"
        onPress={() => navigation.navigate("Result")}
      />
    </View>
  );
};

export default QuizScreen;
