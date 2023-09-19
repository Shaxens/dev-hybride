import { View, TextInput } from "react-native";
import { Input } from "react-native-elements";
import { useState } from "react";
// import { TextInput } from "react-native-gesture-handler";

export const Email = ({ email, setEmail, placeholder }) => {


  const styles = {
    container: {
      width: "100%"
    }
  }

  const checkEmail = () => {

  }

  return (
    <Input style={styles.container}
      placeholder={placeholder}
      inputMode="email"
      keyboardType="email-address"
      value={email}
      onChangeText={(value) => setEmail(value)}
    />
  )
}