import React from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Specials from './components/Specials.js';
import SpecialsCard from './components/SpecialsCard.js';
import Navlink from './components/Navlink.js';
import './App.css';
import Styles from './Styles.css';

function App() {
  return (
    <>
      <Styles />
      <Header />
      <Nav />
      <Navlink />
      <Main />
      <Specials />
      <SpecialsCard />
      <Footer />
    </>
  );
}

export default App;
