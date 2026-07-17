// Daftar semua tugas beserta tombol filternya
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onUpdateTask, onDeleteTask, onToggleStatus }) {
  const [filter, setFilter] = useState("all");

  // Data filter biar kodenya gak berulang-ulang
  const filterOptions = [
    { id: "all", label: "Semua", emptyMsg: "Belum ada tugas yang ditambahkan." },
    { id: "active", label: "Belum Selesai", emptyMsg: "Tidak ada tugas yang belum selesai." },
    { id: "completed", label: "Selesai", emptyMsg: "Tidak ada tugas yang selesai." }
  ];

  // Saring tugas sesuai filter aktif
  const filteredTasks = tasks.filter((task) => 
    filter === "all" ? true : task.status === (filter === "active" ? "0" : "1")
  );

  return (
    <div className="todo-list-container">
      <div className="list-header">
        <span className="list-title">Daftar Tugas</span>
        
        {/* Bikin tombol filter pakai looping biar rapi */}
        <div className="filters">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`filter-btn ${filter === f.id ? "active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Render tugas satu per satu */}
      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            onToggleStatus={onToggleStatus}
          />
        ))}

        {/* Kasih tahu kalau daftar tugasnya kosong */}
        {filteredTasks.length === 0 && (
          <div className="empty-state">
            {filterOptions.find(f => f.id === filter).emptyMsg}
          </div>
        )}
      </ul>
    </div>
  );
}
