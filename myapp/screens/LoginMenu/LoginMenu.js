import { View, Modal, Text, Pressable } from 'react-native';
import AppStyles from '../../AppStyles';
import { Button } from "../../components/Button"
import { useState } from "react";
import { ModalSignUp } from '../../components/ModalSignUp';

export const LoginMenu = ({ onLogin, navigation }) => {

  const styles = AppStyles()


  return (
    <View style={styles.container}>
      <ModalSignUp />
      <Button onPress={() => navigation.navigate("Login")} text="Connexion" />
      <Button onPress={() => navigation.navigate("Sign up")} text="Inscription" />
    </View>
  )
}