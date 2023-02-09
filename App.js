import { StyleSheet, StatusBar, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from './src/routes/stackNavigator'

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator />
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}