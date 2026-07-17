// Menu navigasi atas. Tampil terus di semua halaman.
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo aplikasi, klik untuk pulang ke halaman utama */}
      <NavLink to="/" className="brand-logo">
        TuduLis React
      </NavLink>

      {/* Tombol navigasi. Kalau sedang aktif, tampilannya akan menyala (active) */}
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/tugas" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Tugas
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Tentang
        </NavLink>
        <NavLink to="/profil" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Profil
        </NavLink>
        <NavLink to="/projek" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Projek
        </NavLink>
      </div>
    </nav>
  );
}
