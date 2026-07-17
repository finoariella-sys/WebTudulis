// Pintu gerbang aplikasi — memasang sistem navigasi (router) 
// supaya bisa berpindah halaman tanpa refresh browser
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tugas from "./pages/Tugas";
import About from "./pages/About";
import Profil from "./pages/Profil";
import Projek from "./pages/Projek";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Menu navigasi, selalu tampil di atas */}
        <Navbar />

        {/* Pengatur halaman */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tugas" element={<Tugas />} />
          <Route path="/about" element={<About />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/projek" element={<Projek />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
