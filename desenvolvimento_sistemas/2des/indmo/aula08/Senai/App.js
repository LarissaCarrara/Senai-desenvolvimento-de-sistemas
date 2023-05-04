import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import modalidades from './sources/screens/modalidades';
// import DetalhesScreen from './sources/screens/DetalhesScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tela1"
          component={modalidades}
          options={{ title: 'Modalidades dos cursos' }} />
        {/* <Stack.Screen
          name='Tela2'
          component={cursos}
          options={{ title: 'Cursos' }}
          />
        <Stack.Screen
          name='Tela3'
          component={detalhes}
          options={{ title: 'Detalhes do curso' }}
          /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

