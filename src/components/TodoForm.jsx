// Formulir untuk menulis tugas baru
import { useState } from "react";

export default function TodoForm({ onAddTask }) {
  // Tempat nyimpen teks yang lagi diketik
  const [description, setDescription] = useState("");

  // Waktu tombol ditekan, cegah browser ngerefresh, lalu kirim tugasnya
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onAddTask(description);
    if (success) {
      setDescription(""); // Kosongin teks kalau berhasil
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {/* Kolom ketik tugas */}
      <input
        type="text"
        placeholder="Tulis tugas baru..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-field"
      />
      {/* Tombol kirim */}
      <button type="submit" className="btn-primary">
        Tambah
      </button>
    </form>
  );
}
