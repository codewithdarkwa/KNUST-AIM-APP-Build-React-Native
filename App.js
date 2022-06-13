import "react-native-gesture-handler";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
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
