export default function Profil() {
  const profileData = [
    { label: "Nama", value: "Fino Erza Atta Ariella" },
    { label: "Kelas", value: "XII PPLG A" },
    { label: "No Absen", value: "16" }
  ];

  return (
    <>
      <header>
        <h1 className="page-title">Profil Saya</h1>
        <p className="page-subtitle">Informasi personal pemilik website.</p>
      </header>

      <main style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <table style={{
          width: "100%",
          maxWidth: "700px",
          borderCollapse: "collapse",
          backgroundColor: "var(--bg-secondary)",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid var(--border-color)",
          boxShadow: "var(--shadow-md)"
        }}>
          <tbody>
            {profileData.map((item, index) => (
              <tr 
                key={index}
                style={{
                  borderBottom: index === profileData.length - 1 ? "none" : "1px solid var(--border-color)",
                  transition: "background-color 0.2s ease"
                }}
                className="profile-row"
              >
                <td style={{
                  padding: "18px 24px",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  width: "30%",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderRight: "1px solid var(--border-color)"
                }}>
                  {item.label}
                </td>
                <td style={{
                  padding: "18px 24px",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  color: "var(--text-primary)"
                }}>
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
