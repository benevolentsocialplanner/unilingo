import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";
import MainContainer from './navigation/MainContainer';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <MainContainer/>
    </SafeAreaView>
  );
}

export default App;
