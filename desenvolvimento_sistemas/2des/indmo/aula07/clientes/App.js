import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesScreeen from './sources/screens/clientesScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ClienteScreen"
          component={ClientesScreen}
          options={{ title: 'Tela de Cliente' }} />

      </Stack.Navigator>
  </NavigationContainer>
  );
}

