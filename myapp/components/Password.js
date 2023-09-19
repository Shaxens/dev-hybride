import { View, TextInput } from "react-native";
import { Input } from "react-native-elements";
import { useState } from "react";
// import { TextInput } from "react-native-gesture-handler";

export const Password = ({
  show,
  maxLength,
  minLength,
  minChar,
  minNum,
  minSpecialChar,
  password,
  setPassword,
  placeholder
}) => {

  const styles = {
    container: {
      width: "100%"
    }
  }

  const passwordCheck = () => {
    if (maxLength) {
      let checkMaxLength = /(?=.{ 8, })/
      checkMaxLength.split("8", maxLength);
    }

    if (minLength) {

    }
    if (minChar) {

    }
    if (minNum) {

    }
    if (minSpecialChar) {

    }
  }

  return (
    <View style={styles.container}>
      <Input placeholder={placeholder}
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
    </View>
  )
}