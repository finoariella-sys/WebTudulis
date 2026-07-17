export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "5.5rem",
          fontWeight: "700",
          lineHeight: "1.1",
          letterSpacing: "-0.04em",
          color: "var(--text-primary)",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Halo! <br />
        Selamat Datang di <br />
        <span style={{ color: "#4F9CF9" }}>ToDoList React</span>
      </h1>
    </div>
  );
}