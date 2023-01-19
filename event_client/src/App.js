import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import SortiePage from "./pages/SortiePage";

import Login from "./components/auth/Login";

function App() {
  
  return (
    <div className="App">
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profil" element={<ProfilPage />}/>
        <Route path="/sortie" element={<SortiePage />}/>
        <Route path="/event" element={<SortiePage />}/>
      </Routes>
    </>
    </div>
  );
}

export default App;
