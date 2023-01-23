import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
// import SortiePage from "./pages/SortiePage";
import Outings from "./pages/Outings";

// Login
// import LoginWithFirebase from "./components/auth/login";
import Login from "./components/auth/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/auth/protected";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profil"
            element={
              <Protected>
                <ProfilPage />
              </Protected>
            }
          />
          <Route path="/organize" element={<Outings />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
