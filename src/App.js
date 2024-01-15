import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Main from './components/Main';


const App = () => {
  const appStyles = {
    backgroundColor: 'grey', // Change this to the desired color
    minHeight: '50vh', // Ensures the background color covers the entire viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={appStyles}>
      <Nav />
      <Main/>
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
