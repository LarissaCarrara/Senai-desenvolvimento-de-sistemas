import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesScreen from './sources/screens/clientesScreen';
import DetalhesScreen from './sources/screens/DetalhesScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ClienteScreen"
          component={ClientesScreen}
          options={{ title: 'Tela de Cliente' }} />
        <Stack.Screen
          name='Detalhes'
          component={DetalhesScreen}
          options={{ title: 'Detalhes do Cliente' }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

