import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useEffect } from "react";

import "./style/App.css";

import Header from "./components/Header";
import { FirebaseState } from "./context/firebase/FirebaseState";

import { Home } from "./pages/Home.js";
import { Calculator } from "./pages/Calculator.js";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useAuth } from "hooks/userAuth";
import axios from "axios";
import { setUser } from "store/slices/userSlice";


function App() {

  // useEffect(() => {

  // }, [])
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
            {/* <Route path="*" element={<Navigate to="/signin" replace />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
