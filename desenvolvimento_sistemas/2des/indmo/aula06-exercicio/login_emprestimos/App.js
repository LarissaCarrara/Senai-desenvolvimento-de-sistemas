import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginEmprestimo from './components/loginEmprestimo';
import ScreenEmprestimo from './components/emprestimoForm';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Provider
    <NavigationContainer>

      {/* Container de navegaçao */}
      <Stack.Navigator>

        {/* Telas */}
        <Stack.Screen
            name="Emprestimo"
            component={LoginEmprestimo}
            options={{ title: 'Bem vindo! ' }} />
            
        <Stack.Screen
            name="telaEmprestimo"
            component={ScreenEmprestimo}
            options={{ title: 'Tela Emprestimo' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

