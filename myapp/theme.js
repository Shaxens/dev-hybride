import { useColorScheme } from "react-native"

export const colors = {
  primary: "#467386",
  accent: "#D5A26A",
  warn: "#A7373F",
  white: "#fff",
  black: "#000",
  grey: "#f2f2f2",
}

export const colorTheme = {
  light: {
    background: colors.white,
    text: colors.black,
    primary: colors.greyBlue,
    grey: "#eee"
  },
  dark: {
    background: colors.black,
    text: colors.white,
    primary: colors.greyBlue,
    grey: "#fff"
  }
}

export default () => {
  const themeName = useColorScheme();

  return colorTheme[themeName];
}