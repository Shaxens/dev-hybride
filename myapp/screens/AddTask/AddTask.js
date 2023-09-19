import { Text, View } from "react-native";
import useAppStyle from "../../AppStyles";
import { Input } from "react-native-elements";
import { useState } from "react";
import { Button } from "../../components/Button";
import * as ImagePicker from "expo-image-picker";

export const AddTask = ({ navigation }) => {
  const styles = useAppStyle();
  const [title, setTitle] = useState("");

  [photo, setPhoto] = useState(null);

  const onAddPhoto = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.granted === false) {
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { assets } = result;
      if (assets && assets.length > 0) {
        setPhoto(assets[0].uri);
      }
    }
  };

  const onAddTask = () => {
    fetch('http://192.168.137.1:3000/task', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: { title: title, image: photo } }),
    }).then((result) => navigation.navigate("Stuff list"));
  }


  return (
    <View style={styles.container}>
      <Text>Ajout de la tache : {title}</Text>

      <Input
        placeholder="Titre de la tâche"
        value={title}
        onChangeText={(value) => setTitle(value)}
      ></Input>
      <Button text="Ajouter photo" onPress={() => onAddPhoto()}></Button>
      <Button text="Ajouter la tâche" onPress={() => onAddTask()}></Button>
    </View>
  );
}