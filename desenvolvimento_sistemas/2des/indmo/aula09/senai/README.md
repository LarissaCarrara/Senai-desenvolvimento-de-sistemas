# Inicio
    yarn create-expo-app
    ou npx expo init

# Dependencias

yarn add react-native-reanimated
yarn add react-native-safe-area-context
yarn add react-native-screens
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native

ou 

yarn add react-native-reanimated react-native-safe-area-context react-native-screens @react-navigation/bottom-tabs @react-navigation/native

ou 
npx expo install react-native-reanimated
npx expo install react-native-safe-area-context
npx expo react-native-screens
npx expo @react-navigation/bottom-tabs
npx expo @react-navigation/native

# Inserir no babel.config.js conforme ao lado
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin'
    ]