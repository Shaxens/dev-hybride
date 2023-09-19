import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme, Text, View } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { List } from './screens/List/List';
import { MaterialList } from './screens/List/Material List';
import { AddTask } from './screens/AddTask/AddTask';
import { SignUp } from './screens/SignUp/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { LoginMenu } from './screens/LoginMenu/LoginMenu';
import { Login } from './screens/Login/Login';
import { AddMaterial } from './screens/AddMaterial/AddMaterial';
import { useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {

  const themeName = useColorScheme()

  const App = () => {
    const Drawer = createDrawerNavigator();

    const [connected, setConnected] = useState(false);

    const LoginNavigator = createNativeStackNavigator()

    const LoginScreen = ({ navigation }) => {
      console.log("connected Login Menu : " + connected)
      return (
        <LoginMenu
          navigation={navigation}
        // onLogin={() => setConnected(true)}
        ></LoginMenu >
      )
    };


    return (
      connected ? (
        <Drawer.Navigator >
          <Drawer.Screen component={List} name='Stuff list' />
          <Drawer.Screen component={MaterialList} name='Material list' />
          <Drawer.Screen component={AddTask} name='Add task' />
          <Drawer.Screen component={AddMaterial} name='Add material' />
        </Drawer.Navigator >
      ) : (
        <LoginNavigator.Navigator >
          <LoginNavigator.Screen component={LoginScreen} name='Login menu' />
          <LoginNavigator.Screen component={Login} name='Login' initialParams={{ connected, setConnected }} />
          <LoginNavigator.Screen component={SignUp} name='Sign up' />
        </LoginNavigator.Navigator >
      )
    )
  }

  return (
    <NavigationContainer theme={themeName === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" networkActivityIndicatorVisible="true" />
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}