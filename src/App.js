import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FirebaseState } from "./context/firebase/FirebaseState";

import "./style/App.css";

import Header from "./Components/Header";

import { Home } from "./pages/Home.js";
import { Calculator } from "./pages/Calculator.js";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {

  return (
    <FirebaseState>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
            <Route path={process.env.PUBLIC_URL + "/calc"} element={<Calculator />} />
            <Route path={process.env.PUBLIC_URL + "/signup"} element={<SignUp />} />
            <Route path={process.env.PUBLIC_URL + "/signin"} element={<SignIn />} />
            <Route path="*" element={<Navigate to={process.env.PUBLIC_URL + "/signin"} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
