import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Wrapper from './pages/Wrapper';
import Cover from './pages/Cover';
import Main from './pages/Main';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Wrapper>
      <Cover />
      <Routes>
        <Route path='/' element={<Main />} />


      </Routes>

      <Footer />
    </Wrapper>
  )
}

export default App