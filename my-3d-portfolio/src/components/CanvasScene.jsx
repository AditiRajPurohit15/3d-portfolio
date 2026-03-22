import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Island from "./Island";
import CameraController from "./CameraController";

export default function CanvasScene({ setActiveSection, introDone }) {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 60 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <color attach="background" args={["#AAC4F5"]} />

      {/* lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Island setActiveSection={setActiveSection} />
      <CameraController introDone={introDone} />

      {/* controls for now */}
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}