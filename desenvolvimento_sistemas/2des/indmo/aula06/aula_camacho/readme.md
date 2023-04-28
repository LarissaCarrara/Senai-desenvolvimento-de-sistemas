REGEX: Padrão para identificar string 
ou numeros e formatar de acordo com o necessario

Dependencias:

1 - iniciar com "npx expo init"

2 - instalar as dependencias
    - yarn add @react-navigation/native
    - yarn add react-native-safe-area-context
    - yarn add react-native-screens
    - yarn add react-native-svg
    - yarn add @react-navigation/native-stack
    - yarn add react-native-mask-input

3 - criar duas pastas
    - screens
    - components

4 - importar no topo do arquivo app.js os arquivos
    - import { createNativeStackNavigator } from '@react-navigation/native-stack';
    - import { NavigationContainer } from '@react-navigation/native';

5 - adicionar no seu return 
    - return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginForm}
                    options={{ title: 'Bem vindo ' }} />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ title: 'Dashboard' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

EXERCICIO

Criar a tela de juros

Criar o componente de calculo de juros

Fazer a pagina de login 

Validar o login

Ir para pagina de juros

obs: usar maskinput no componente de calculo de juros