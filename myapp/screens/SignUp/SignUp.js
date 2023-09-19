import { Text, View } from "react-native";
import useAppStyle from "../../AppStyles";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Password } from "../../components/Password";
import { Email } from "../../components/Email";
import { LoginMenu } from "../LoginMenu/LoginMenu";

export const SignUp = ({ navigation }) => {
  const styles = useAppStyle();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const admin = 0;

  const signUp = () => {
    fetch('http://192.168.137.1:3000/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, admin }),
    }).then((result) => navigation.navigate("Login menu"))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page d'inscription</Text>
      <Text style={styles.text}>{email}</Text>
      <Email setEmail={setEmail} email={email} placeholder={"Entrez une adresse mail valide"} />
      <Password setPassword={setPassword} password={password} placeholder={"Entrez un mot de passe"} />
      <Button onPress={() => signUp()} text="Créer un compte" icon="chevron-right" iconRight={true} />
    </View>
  );
};