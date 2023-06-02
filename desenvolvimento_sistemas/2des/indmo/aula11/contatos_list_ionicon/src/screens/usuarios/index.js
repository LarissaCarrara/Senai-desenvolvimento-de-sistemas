import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import users from '../../../mocks/usuario'
import ItemList from '../../components/index.js';

export default function Usuarios({ navigation }) {
  function abrirDetalhes(usuario) {
    navigation.navigate('Detalhes', { usuario })
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        style={styles.list}
        renderItem={({ item }) => <TouchableOpacity onPress={() => abrirDetalhes(item)}>
          {ItemList(item)}
        </TouchableOpacity>}
      >
      </FlatList>
    </View>
  );
}