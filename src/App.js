import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Wrapper from './pages/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sub01' element={<Magslide />} />
        <Route path='/sub02' element={<Store />} />

      </Routes>

      <Footer />
    </Wrapper>
  )
}

export default App