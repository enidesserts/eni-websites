import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './temp/LandingPage';
import { Main } from './Main';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/beta" element={<Main/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
