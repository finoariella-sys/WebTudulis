import { Link } from "react-router-dom";

export default function Projek() {
  const dummyProjects = [
    {
      id: 1,
      title: "Projek Hari Pertama",
      description: "Tugas pada hari pertama ini kita diberikan Materi tentang ReactJS Dan juga ditugaskan untuk membuat sebuah website ToDoList.",
      link: "/tugas"
    },
    {
      id: 2,
      title: "Project Hari Kedua",
      description: "Pada hari kedua para siswa dikenalkan dengan Antigravity IDE dan backend supabase,Dan kita ditugaskan untuk membuat website yang menggunakan minimal 2 Fitur Supabase.",
      link: "https://fclaude.vercel.app/"
    },
    {
      id: 3,
      title: "Project Hari Ketiga",
      description: "Pada hari ketiga, kita membangun website portofolio pribadi yang dinamis dan modern untuk mendokumentasikan serta memamerkan karya kita.",
      link: "https://portofolio-ashen-eight-87.vercel.app/"
    }
  ];

  return (
    <>
      <header>
        <h1 className="page-title">Projek Saya</h1>
        <p className="page-subtitle">Daftar projek yang telah berhasil dibangun.</p>
      </header>

      <main style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        marginTop: "20px"
      }}>
        {dummyProjects.map((project) => (
          <div
            key={project.id}
            style={{
              padding: "24px",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              backgroundColor: "var(--bg-secondary)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "var(--text-primary)"
              }}>
                {project.title}
              </h2>
              <p style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: "1.5"
              }}>
                {project.description}
              </p>
            </div>
            {project.link && (
              project.link.startsWith("http") ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  Buka Web
                </a>
              ) : (
                <Link
                  to={project.link}
                  className="project-link-btn"
                >
                  Buka Web
                </Link>
              )
            )}
          </div>
        ))}
      </main>
    </>
  );
}
