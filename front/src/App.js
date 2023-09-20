import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import HomePage from './pages/HomePage';
import PasadoPage from './pages/PasadoPage';
import DecadaPage from './pages/DecadaPage';
import HoyPage from './pages/HoyPage';
import FuturoPage from './pages/FuturoPage';


 function App(){
  return(
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Pasado" element={<PasadoPage />} />
          <Route path="/Decada" element={<DecadaPage />} />
          <Route path="/Hoy" element={<HoyPage />} />
          <Route path="/Futuro" element={<FuturoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
)
}

export default App;