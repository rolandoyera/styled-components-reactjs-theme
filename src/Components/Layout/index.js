import { React, useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../Theme/GlobalStyle";
import storage from 'local-storage-fallback'
import { lightTheme, darkTheme } from '../Theme/Theme'
import Footer from '../Footer'
import HomeIntro from '../HomeIntro'
import NavBar from '../Nav/'
import { FiSun, FiMoon } from "react-icons/fi";
import { Toggler } from './Styles'

function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
}

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(
    () => { storage.setItem('theme', JSON.stringify(theme)) }, [theme]
  )
  const toggleTheme = () => { theme === "light" ? setTheme("dark") : setTheme("light") }
  const icon = theme === "light" ? <FiMoon size={26} /> : <FiSun size={26} />

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <NavBar><Toggler onClick={() => toggleTheme()}>{icon}</Toggler></NavBar>
      <HomeIntro />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
