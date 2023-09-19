import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AppStyles from '../../AppStyles';
import ListStyle from './ListStyle';
import { Button } from '../../components/Button';

export const List = ({ navigation }) => {

  const styleTask = {
    padding: 15,
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
    minHeight: 50,
    width: "100%"
  }
  const styles = { ...AppStyles(), ...ListStyle() }

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://192.168.137.1:3000/tasks')
      .then((result) => result.json())
      .then((liste) => setList(liste));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 20 }]}>Listes : {list.length}</Text>
      <FlatList style={{ width: "100%" }}
        data={list}
        renderItem={({ item }) => (
          <View style={[styleTask, item.complete ? { backgroundColor: "#beebc0" } : {}]}>
            <Text>{item.title}</Text>
          </View>
        )} />
      <Button fab icon="plus" onPress={() => navigation.navigate("Add task")}></Button>
    </View >
  )
}