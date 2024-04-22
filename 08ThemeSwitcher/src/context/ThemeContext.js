import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "dark",
  darkTheme() {},
  lightTheme() {},
});

export const ThemeProvider = ThemeContext.Provider;

//Custom hook
// This exports the ThemeContext objects or values
const useTheme = () => {
  return useContext(ThemeContext);
};
export default useTheme;
