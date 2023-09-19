import { Text, View, Image } from "react-native";
import useAppStyle from "../../AppStyles";
import { Input } from "react-native-elements";
import { useState } from "react";
import { Button } from "../../components/Button";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from 'react';
import * as Location from 'expo-location';
import DatePicker from "../../components/DatePicker";

export const AddMaterial = ({ navigation, route }) => {
  const styles = useAppStyle();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [errorMsg, setErrorMsg] = useState(null);

  [photo, setPhoto] = useState("");

  const handleDateChange = (date) => {
    setDate(date);
  };



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



  const onAddLocalisation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  }


  const onAddMaterial = () => {
    const materialData = {
      title,
      image: photo,
      description,
      latitude: location.latitude,
      longitude: location.longitude,
      altitude: location.altitude,
      date
    };
    if (route.params && route.params.materialId) {
      console.log(materialData)
      fetch(`http://192.168.137.1:3000/material/${route.params.materialId}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ material: materialData }),
      }).then((result) => navigation.navigate("Material list"));
    } else {
      fetch('http://192.168.137.1:3000/material', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ material: materialData }),
      }).then((result) => navigation.navigate("Material list"));
    }
  }

  useEffect(() => {
    if (route.params && route.params.materialId) {
      fetch(`http://192.168.137.1:3000/material/${route.params.materialId}`)
        .then((result) => result.json())
        .then((material) => {
          setTitle(material.title);
          setDescription(material.description);
          if (material.photo) {
            setPhoto(material.photo)
          }
          if (material.latitude && material.longitude && material.altitude) {
            setLocation({
              latitude: material.latitude,
              longitude: material.longitude,
              altitude: material.altitude,
            });
          }
          setDate(new Date(material.date));
        })
        .catch((error) => {
          console.error('Error fetching material data:', error);
        });
    }
  }, [route.params]);


  return (
    <View style={styles.container}>
      <Text>Ajout du matériel : {title}</Text>

      <Input placeholder="Titre du matériel"
        value={title}
        onChangeText={(value) => setTitle(value)} />
      <Input placeholder="Description du matériel"
        value={description}
        onChangeText={(value) => setDescription(value)} />
      <Button text="Ajouter photo" onPress={() => onAddPhoto()} />
      <Button text="Ajouter localisation" onPress={() => onAddLocalisation()} />
      <Button text="Ajouter le matériel" onPress={() => onAddMaterial()} />
      <DatePicker selectedDate={date} onDateChange={handleDateChange} />
    </View>
  );
}