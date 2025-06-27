import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './temp/LandingPage';
import { Overview } from './overview/Overview';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/beta" element={<Overview/>}/>
          <Route path="/*" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
