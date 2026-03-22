import { useState, useEffect } from "react";
import CanvasScene from "./components/CanvasScene";
import Panel from "./components/Panel";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [introDone, setIntroDone] = useState(false);
  

  return (
    <>
    {!introDone && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)", // dark overlay
      backdropFilter: "blur(5px)",   // 🔥 blur effect
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 20,
    }}
  >
    <button
  onClick={() => setIntroDone(true)}

  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.1)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
  }}

  style={{
    padding: "15px 30px",
    fontSize: "20px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    background: "#fef3c7",
    color: "#1f2937",
    fontWeight: "bold",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: "all 0.2s ease", // 🔥 IMPORTANT (smooth)
  }}
>
   Enter My World
</button>
  </div>
)}
      <CanvasScene 
      setActiveSection={setActiveSection}
      introDone={introDone}
      />

      {/* PANEL */}
      <Panel
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
}

export default App;