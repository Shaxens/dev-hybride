import { View, Modal, Text, Pressable } from 'react-native';
import AppStyles from '../AppStyles';
import { useState } from "react";
import { Icon } from 'react-native-elements';

export const ModalSignUp = ({ }) => {

  const styles = AppStyles()

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }} >
      <View style={styles.modalView}>
        <Pressable
          style={styles.modalView.display}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.modalView.text}>Votre compte a été créé</Text>
          <Icon color={styles.text.color} name={"close"} type={"font-awesome"} style={styles.modalView.icon} />
        </Pressable>
      </View>
    </Modal>
  )
}