import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const QuizScreen = ({ navigation, ...rest }) => {
  console.log(...rest)
  const [steps, setSteps] = useState([
    {pergunta: ""}
  ])

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
