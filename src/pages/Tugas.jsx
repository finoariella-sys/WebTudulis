// Halaman utama tempat semua fitur Todo List disatukan.
import { useTasks } from "../hooks/useTasks";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Toast from "../components/Toast";

export default function Tugas() {
  // Ambil paket lengkap (data & fungsi) dari custom hook useTasks
  const {
    tasks,
    error,
    success,
    addTask,
    updateTask,
    toggleTaskStatus,
    deleteTask,
  } = useTasks();

  return (
    <>
      {/* Judul atas halaman */}
      <header>
        <h1 className="page-title">Daftar Tugas</h1>
        <p className="page-subtitle">Kelola prioritas harian Anda dengan presisi minimalis.</p>
      </header>

      <main style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        {/* Form ketik tugas baru, dikasih fungsi tambah (addTask) */}
        <TodoForm onAddTask={addTask} />

        {/* List tugas, dikasih semua data dan fungsi ubah/hapus supaya bisa merender tugas */}
        <TodoList
          tasks={tasks}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
          onToggleStatus={toggleTaskStatus}
        />
      </main>

      {/* Pop-up notifikasi, diam-diam nunggu pesan error/sukses */}
      <Toast error={error} success={success} />
    </>
  );
}
