import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function CameraController({ introDone }) {
  const scroll = useRef(0);
  const targetScroll = useRef(0);
  const introProgress = useRef(0);

  // 🎮 scroll control
  useEffect(() => {
    const handleWheel = (e) => {
      if (!introDone) return; // block scroll before intro

      targetScroll.current += e.deltaY * 0.001;
      targetScroll.current = Math.max(0, Math.min(1, targetScroll.current));
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [introDone]);

  useFrame(({ camera }) => {

    // 🎬 INTRO ANIMATION (runs after click)
    if (introProgress.current < 1) {
      introProgress.current += 0.02;

      const t = Math.min(introProgress.current, 1);

      camera.position.x = 0;
      camera.position.z = 10 - t * 5;
      camera.position.y = 5 - t * 3;

      camera.lookAt(0, 0, 0);
      return;
    }

    // 🎮 SCROLL CAMERA
    scroll.current += (targetScroll.current - scroll.current) * 0.08;

    const progress = scroll.current;
    const radius = 5;
    const angle = progress * Math.PI * 2;

    camera.position.x = Math.sin(angle) * radius;
    camera.position.z = Math.cos(angle) * radius;
    camera.position.y = 2;

    camera.lookAt(0, 0, 0);
  });

  return null;
}