import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventPage from "./pages/EventPage";
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
        <Route path="/event/:uid" element={<EventPage />}/>
        <Route path="/sortie/:uid" element={<SortiePage />}/>
      </Routes>
    </>
  );
}

export default App;
