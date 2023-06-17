import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/View/Home/Home";
import { ThemeProvider } from "styled-components/native";

import COLORS from "./src/styles/theme";
// import COLORS from "../src/styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={COLORS}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Home />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
