import React from 'react';
import { NavigationContainer,DarkTheme, DefaultTheme } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {ThemeProvider} from './hooks/ThemeContext'
import {useTheme} from './hooks/ThemeContext'

export default function App() {
  const themeStyles ={
    ...DarkTheme,
    colors:{
    backgroundColor: DarkTheme ? '#404040' : '#fff',
        txtColor: '#fff',
        icon: '#fff',
    }
    }
  return (
      <ThemeProvider>
         <NavigationContainer theme={DarkTheme}>
           <DrawerNavigator/>
         </NavigationContainer>
      </ThemeProvider>
  );
}
