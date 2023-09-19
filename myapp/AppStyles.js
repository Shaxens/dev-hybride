import useTheme from "./theme"
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const theme = useTheme();

  const insets = useSafeAreaInsets()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: insets.bottom,
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    safeArea: {
      paddingBottom: insets.bottom,
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    text: {
      color: theme.text
    },
    button: {
      backgroundColor: theme.primary,
      height: 50,
      borderRadius: 15,
      padding: 15,
      margin: 10,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",
      text: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
      }
    },
    modalView: {
      marginBottom: insets.bottom,
      marginTop: insets.top,
      marginLeft: insets.left,
      marginRight: insets.right,
      backgroundColor: '#CFF0A4',
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      text: {
        fontSize: 20
      },
      display: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5,
      },
      icon: {
        marginLeft: 10
      }
    },

  });
}