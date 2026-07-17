import { useState, useEffect } from "react";

export function useTasks() {
  // Ambil data dari laci rahasia browser (LocalStorage). 
  // Kalau kosong, mulai dengan daftar kosong [].
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Kotak untuk menyimpan pesan sukses atau error sementara.
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Asisten rajin: setiap ada perubahan tugas, otomatis simpan ke laci browser.
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Fungsi memunculkan pesan notifikasi. Akan hilang sendiri setelah 3 detik.
  const showFlash = (type, message) => {
    if (type === "error") {
      setError(message);
      setSuccess("");
    } else {
      setSuccess(message);
      setError("");
    }
    const timer = setTimeout(() => {
      setError("");
      setSuccess("");
    }, 3000);
    return () => clearTimeout(timer);
  };

  // Tambah tugas baru ke daftar. Cek dulu tidak boleh kosong & minimal 5 huruf.
  const addTask = (description) => {
    setError("");
    setSuccess("");

    if (!description) {
      showFlash("error", "Mohon isi to do list yang akan disimpan");
      return false;
    }
    if (description.length < 5) {
      showFlash("error", "Isikan to do list minimal 5 karakter");
      return false;
    }

    const newTask = {
      id: +new Date(), // Jadikan waktu saat ini sebagai ID unik.
      description: description.trim(),
      status: "0", // 0 = belum selesai, 1 = sudah selesai.
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    showFlash("success", "Berhasil menyimpan data");
    return true;
  };

  // Ubah teks atau status tugas yang sudah ada.
  const updateTask = (id, updatedDesc, updatedStatus) => {
    setError("");
    setSuccess("");

    if (!updatedDesc || updatedDesc.trim().length < 5) {
      showFlash("error", "Isikan to do list minimal 5 karakter");
      return false;
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: updatedDesc.trim(), status: updatedStatus } : task
      )
    );
    showFlash("success", "Berhasil memperbarui data");
    return true;
  };

  // Klik cepat untuk ganti status dari "belum" jadi "selesai" (atau sebaliknya).
  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "1" ? "0" : "1" } : task
      )
    );
    showFlash("success", "Berhasil memperbarui status tugas");
  };

  // Hapus tugas dari daftar berdasarkan ID-nya.
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    showFlash("success", "Berhasil menghapus data");
  };

  // Bungkus semua fungsi dan data untuk dikirim ke komponen yang membutuhkan.
  return {
    tasks,
    error,
    success,
    addTask,
    updateTask,
    toggleTaskStatus,
    deleteTask,
  };
}
