import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Contacts from './pages/Contacts/Contacts';
import Life from './pages/Life/Life';
import Main from './pages/Main/Main';
import Portfolio from './pages/Portfolio/Portfolio';
import Skills from './pages/Skills/Skills';
import { GlobalStyle } from './style/global';
import { darkTheme, lightTheme } from './style/theme';
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle/>
        <Header switchTheme={switchTheme}/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/life' element={<Life/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
