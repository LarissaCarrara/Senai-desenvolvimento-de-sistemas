import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Nome do Quiz</Text>
      <Button
        title="Iniciar Teste"
        onPress={() => navigation.navigate('Quiz')}
      />
    </View>
  );
};

export default HomeScreen;
