import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

import Contact from './components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';

import './App.css';




function App() {
  return (
    <MainContainer>
      <NavBar />
      <LandingPage />
      <Contact />
      <Footer />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div `
  
`