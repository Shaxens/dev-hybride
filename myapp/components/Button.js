import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme";
import { Icon } from "react-native-elements";

export const Button = ({ text,
  onPress,
  fab,
  icon,
  iconRight,
  iconType = "font-awesome", }) => {
  const styles = {
    content: {
      backgroundColor: colors.primary,
      height: 60,
      borderRadius: 15,
      padding: 15,
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
    },
    text: {
      fontWeight: "bold",
      color: colors.white,
      fontSize: 20,
    },
    fab: {
      position: "absolute",
      bottom: 16,
      right: 16,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      elevation: 4,
    },
    iconRight: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 5,
      paddingRight: 5,
      iconMargin: {
        marginLeft: 10
      }
    },
    iconLeft: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 5,
      paddingRight: 5,
      iconMargin: {
        marginRight: 10
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={fab ? styles.fab : styles.content}
    >
      {icon ? (
        <View>
          {iconRight ? (
            <View style={styles.iconRight}>
              <Text style={styles.text}>{text}</Text>
              <Icon color={styles.text.color} name={icon} type={iconType} style={styles.iconRight.iconMargin} />
            </View>
          ) : (
            <View style={styles.iconLeft}>
              <Icon color={styles.text.color} name={icon} type={iconType} style={styles.iconLeft.iconMargin} />
              <Text style={styles.text}>{text}</Text>
            </View>
          )}

        </View>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};