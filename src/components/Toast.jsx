// Notifikasi pop-up yang muncul sebentar di sudut layar.
export default function Toast({ error, success }) {
  // Kalau tidak ada error atau sukses, jangan tampilkan apa-apa (null).
  if (!error && !success) return null;

  // Render kotak pesan merah (error) atau hitam-putih (sukses) sesuai data yang masuk.
  return (
    <div className="toast-container">
      {error && (
        <div className="toast error">
          <span>•</span>
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="toast success">
          <span>✓</span>
          <span>{success}</span>
        </div>
      )}
    </div>
  );
}
