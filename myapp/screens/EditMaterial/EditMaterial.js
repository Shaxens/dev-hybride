// EditMaterial.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditMaterial = ({ route }) => {
  const { materialId } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Lorsque l'écran est chargé, récupérez les données du matériau à éditer
    fetch(`http://192.168.137.1:3000/material/${materialId}`)
      .then((result) => result.json())
      .then((material) => {
        setTitle(material.title);
        setDescription(material.description);
      });
  }, [materialId]);

  const handleUpdateMaterial = () => {
    // Envoyez la requête PATCH avec les nouvelles données
    // ...
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput value={title} onChangeText={setTitle} />

      <Text>Description:</Text>
      <TextInput value={description} onChangeText={setDescription} />

      <Button title="Update Material" onPress={handleUpdateMaterial} />
    </View>
  );
};

export default EditMaterial;
