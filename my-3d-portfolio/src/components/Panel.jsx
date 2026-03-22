export default function Panel({ activeSection, setActiveSection }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "100%",
        pointerEvents: activeSection ? "auto" : "none",
        zIndex: 10,
      }}
    >
      {/* CARD */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: activeSection ? "40px" : "-400px",
          transform: `translateY(-50%) ${
            activeSection ? "rotate(-2deg) scale(1)" : "rotate(5deg) scale(0.9)"
          }`,
          width: "320px",
          minHeight: "400px",
          background: "#fef3c7",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          transition: "all 0.5s ease",
          fontFamily: "'Caveat', cursive",
          color: "#1f2937",
        }}
      >
        {/* CLOSE BUTTON */}
        <div style={{ textAlign: "right" }}>
          <button
            onClick={() => setActiveSection(null)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </div>

        {/* CONTENT */}
        {activeSection === "home" && (
          <>
            <h2>🏠 Welcome</h2>
            <p>This is my little world 🌍✨</p>
            {/* <br /> */}
            <p>Hi, I’m Aditi 👋  <br />
                Full Stack Developer  <br />

                I build interactive web experiences  <br />
                using React, Three.js & MERN stack  <br />

                Scroll to explore 🚀</p>
          </>
        )}

        {activeSection === "about" && (
          <>
            <h2>📜 About Me</h2>
            <p>
              Hi, I’m Aditi 👋  <br />
              
            I’m a Full Stack Developer passionate about
            building clean and interactive web applications. <br />

            I enjoy turning ideas into real products —<br />
            from designing UI to building scalable backend systems. <br />

            Currently exploring 3D web (Three.js) <br />
            and aiming to build immersive digital experiences.
            </p>
          </>
        )}

        {activeSection === "skills" && (
          <>
            <h2>🛠️ Skills</h2>
            <ul>
              <li>React ⚛️</li>
              <li>Three.js 🌌</li>
              <li>Node.js 🟢</li>
              <li>Express.js 🚏</li>
              <li>Next.js ▲</li>
              <li>MongoDB 🍃</li>
              <li>Tailwind CSS 🎨</li>
              <li>Postman 📬</li>
              <li>GitHub 🐙</li>
            </ul>
          </>
        )}

        {activeSection === "contact" && (
          <>
            <h2>📮 Contact</h2>
            <p>📧 aditipurohit1505@gmail.com  <br />
                🔗 LinkedIn - https://www.linkedin.com/in/aditi-raj-purohit-9677b1340/ <br />
                💻 GitHub - https://github.com/AditiRajPurohit15  <br />
                🧩 Leetcode - https://leetcode.com/u/Aditi1505/ <br /><br />
                💌 “Let’s build something cool together”</p>
          </>
        )}
      </div>
    </div>
  );
}