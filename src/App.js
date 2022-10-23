import { useState } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries"
import { Routes, Route } from 'react-router-dom'
import CountryDetails from "./components/CountryDetails";




function App() {
  const [theme, setTheme] = useState("dark-theme")

  const toggleTheme = () => {
    theme == "dark-theme" ? (setTheme("light-theme")) : (setTheme("dark-theme"));
  }

  console.log(theme)
  
  return(
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Routes>
        <Route path='/' element={<Countries/>} />
        <Route path='/:capital' element={<CountryDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
