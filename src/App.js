import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './component/first';
import Third from './component/third';
import Four from './component/four';
import Per from './component/per';
import Sup from './component/supreme';
import Dun from './component/dunil';
import Desire from './component/desire';
import Cotton from './component/cotton';
import Soft from './component/soft';
import Free from './component/free';
import Wallet from './component/wallet';
import Last from './component/last';
function App() {
  return (
   <BrowserRouter>
  <Routes>
    <Route
   path="/"
    element={
    <>
    <First/>
    <Third/>
    <Four/>
    <Per />
    <Sup/>
    <Dun />
    <Desire />
    <Cotton />
    <Soft />
    <Free />
    <Wallet />
    <Last />
    </>
    }
    />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
