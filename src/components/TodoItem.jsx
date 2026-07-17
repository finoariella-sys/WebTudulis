// Komponen satu baris tugas
import { useState } from "react";

export default function TodoItem({ task, onUpdateTask, onDeleteTask, onToggleStatus }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDesc, setEditDesc] = useState(task.description);

  // Buka/tutup form edit (reset teks jika batal)
  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) setEditDesc(task.description);
  };

  // Simpan hasil edit teks
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (onUpdateTask(task.id, editDesc, task.status)) setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <div className="todo-item-content">
        
        {/* Sisi Kiri: Checkbox dan Teks Tugas */}
        <div className="todo-item-left">
          <input
            type="checkbox"
            checked={task.status === "1"}
            onChange={() => onToggleStatus(task.id)}
            className="todo-checkbox"
          />
          <span
            onClick={() => onToggleStatus(task.id)}
            className={`todo-text ${task.status === "1" ? "completed" : ""}`}
          >
            {task.description}
          </span>
        </div>

        {/* Sisi Kanan: Tombol Edit dan Hapus */}
        <div className="todo-actions">
          <button onClick={handleToggleEdit} className="btn-icon" title="Ubah tugas">✏️</button>
          <button onClick={() => onDeleteTask(task.id)} className="btn-icon delete" title="Hapus tugas">🗑️</button>
        </div>
      </div>

      {/* Form edit muncul cuma kalau lagi mode edit */}
      {isEditing && (
        <form onSubmit={handleSubmitEdit} className="edit-form-container edit-input-group">
          <input
            type="text"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            className="input-field"
            placeholder="Ubah deskripsi tugas..."
            autoFocus
          />
          <div className="edit-actions">
            <button type="button" onClick={handleToggleEdit} className="btn-sm btn-secondary">Batal</button>
            <button type="submit" className="btn-sm btn-primary">Simpan</button>
          </div>
        </form>
      )}
    </li>
  );
}
