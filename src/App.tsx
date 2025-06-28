import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './temp/LandingPage';
import { Main } from './Main';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/beta" element={<Main/>}/>
          <Route path="/*" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
