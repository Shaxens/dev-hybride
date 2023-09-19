import { StyleSheet } from "react-native";
import useTheme from "../../theme";

export default () => {
  const theme = useTheme();

  return StyleSheet.create({
    todo: {
      backgroundColor: theme.grey,
      borderRadius: 15,
      padding: 10,
      margin: 5,
      minHeight: 60
    }
  })
}