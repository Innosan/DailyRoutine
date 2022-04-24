import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./style/App.css";

import { Home } from './pages/Home.js';
import { Calculator } from './pages/Calculator.js';
import Header from './components/Header';
import { FirebaseState } from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/calc'} element={<Calculator />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FirebaseState>
  );
}

export default App;