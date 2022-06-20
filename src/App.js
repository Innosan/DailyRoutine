import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FirebaseState } from "./context/firebase/FirebaseState";

import "./style/App.css";

import Header from "./components/Header";

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
            <Route path={"/"} element={<Home />} />
            <Route path={"/calc"} element={<Calculator />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route path={"/signin"} element={<SignIn />} />
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
