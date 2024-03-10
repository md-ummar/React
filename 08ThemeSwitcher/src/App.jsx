import { useEffect, useState } from "react";
import ThemeBtn from "./assets/Components/ThemeBtn";
import Card from "./assets/Components/Card";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const darkTheme = () => {
    setthemeMode("dark");
  };

  const lightTheme = () => {
    setthemeMode("light");
  };

  //Actual theme change JS Dom
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
