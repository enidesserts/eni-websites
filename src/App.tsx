import './App.scss';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Main} from './Main';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
