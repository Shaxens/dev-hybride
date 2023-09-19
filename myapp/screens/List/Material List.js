import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AppStyles from '../../AppStyles';
import ListStyle from './ListStyle';
import { Button } from '../../components/Button';
import { format } from 'date-fns';

export const MaterialList = ({ navigation }) => {

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

  const fetchMaterials = () => {
    fetch('http://192.168.137.1:3000/materials')
      .then((result) => result.json())
      .then((liste) => setList(liste));
  }

  useEffect(() => {
    fetchMaterials();
  }, []);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      fetchMaterials();
    });
  }, [navigation]);

  const handleEditMaterial = (id) => {
    navigation.navigate('Add material', { materialId: id });
  }
  console.log(list[0])
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 20 }]}>Listes : {list.length}</Text>
      <FlatList style={{ width: "100%" }}
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleEditMaterial(item.id)}>
            <View style={[styleTask]}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>Latitude : {item.latitude ? item.latitude : 'N/A'}</Text>
              <Text>Longitude : {item.longitude ? item.longitude : 'N/A'}</Text>
              <Text>Altitude : {item.altitude ? item.altitude : 'N/A'}</Text>
              <Text>{format(new Date(item.date), 'dd/MM/yyyy')}</Text>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            </View>
          </TouchableOpacity>
        )} />
      <Button fab icon="plus" onPress={() => navigation.navigate("Add material")} />
    </View >
  )
}