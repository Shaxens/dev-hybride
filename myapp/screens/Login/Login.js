import { Text, View } from "react-native";
import useAppStyle from "../../AppStyles";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Password } from "../../components/Password";
import { Email } from "../../components/Email";
import { LoginMenu } from "../LoginMenu/LoginMenu";
import { useEffect } from 'react';

export const Login = ({ navigation, route }) => {
  const styles = useAppStyle();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fetch('http://192.168.137.1:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (response.status === 200) {
        route.params.setConnected(true)
        console.log("Connected request : " + route.params)
        // Voir pour passer le params setConnected
      } else if (response.status >= 400) {
        route.params.setConnected(false)
        console.log("Connected request : " + JSON.stringify(route.params))
      }
    })
  }

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => login()} text="Se connecter" icon="chevron-right" iconRight={true} />
  //     ),
  //   });
  // }, [navigation, route.params.setConnected]);



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page de connexion</Text>
      <Text style={styles.text}>{email}</Text>
      <Email setEmail={setEmail} email={email} placeholder={"Entrez votre adresse mail"} />
      <Password setPassword={setPassword} password={password} placeholder={"Entrez votre mot de passe"} />
      <Button onPress={() => login()} text="Se connecter" icon="chevron-right" iconRight={true} />
    </View>
  );
};