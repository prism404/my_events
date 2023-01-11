import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import SortiePage from "./pages/SortiePage";


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/profil" element={<ProfilPage />}/>
        <Route path="/sortie" element={<SortiePage />}/>

      </Routes>
    </div>
  );
}

export default App;
