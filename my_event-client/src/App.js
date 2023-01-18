import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import SortiePage from "./pages/SortiePage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/profil" element={<ProfilPage />}/>
        <Route path="/sortie" element={<SortiePage />}/>
        <Route path="/event" element={<SortiePage />}/>
      </Routes>
    </>
  );
}

export default App;
