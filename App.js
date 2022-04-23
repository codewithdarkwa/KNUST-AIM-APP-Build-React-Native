import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DjarkTheme } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { ThemeProvider } from "./hooks/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer theme={DarkTheme}>
        <DrawerNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
