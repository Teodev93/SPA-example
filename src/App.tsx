import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Importa i componenti delle tue pagine
import SunglassesPage from "./pages/SunglassesPage";
import EyegalssesPage from "./pages/EyegalssesPage";
import LensesPage from "./pages/LensesPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SunglassesPage />} />
        <Route path="/eyegalsses" element={<EyegalssesPage />} />
        <Route path="/lenses" element={<LensesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
