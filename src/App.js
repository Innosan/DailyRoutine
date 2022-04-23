import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./style/App.css";

import { Home } from './pages/Home.js';
import { Calculator } from './pages/Calculator.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/calc'} element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;