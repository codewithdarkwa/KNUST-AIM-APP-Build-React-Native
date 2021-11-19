import React,{createContext, useState,useContext} from 'react';

//creating context 
const ThemeContext = createContext();
const ThemeContextUpdate = createContext();

//creating custom hooks
export const useTheme = ()=>{
    return useContext(ThemeContext);
}
export const useThemeUpdate = ()=>{
  return useContext(ThemeContextUpdate);
}

//creating theme provider
export const ThemeProvider = ({children}) => {
  const [DarkTheme, setDarkTheme] = useState(false);

  const ToggleTheme = () =>{
      setDarkTheme(prevTheme => !prevTheme)
  }
  return (
  <ThemeContext.Provider value={DarkTheme}>
   <ThemeContextUpdate.Provider value={ToggleTheme}>
     {children}
   </ThemeContextUpdate.Provider>
  </ThemeContext.Provider>
  )
}
