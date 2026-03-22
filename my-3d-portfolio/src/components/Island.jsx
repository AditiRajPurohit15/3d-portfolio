import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Island({ setActiveSection }) {
  const { scene } = useGLTF("/models/island.glb");

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    // center model
    scene.position.sub(center);

    // scale nicely
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxDim;
    scene.scale.setScalar(scale);

  }, [scene]);

  return (
    <primitive
      object={scene}
      onClick={(e) => {
        e.stopPropagation();

        let obj = e.object;

        while (obj.parent) {
          if (
            obj.name === "house" ||
            obj.name === "about" ||
            obj.name === "skills" ||
            obj.name === "contact"
          ) break;

          obj = obj.parent;
        }

        const name = obj.name;
        console.log("Clicked:", name);

        if (name === "house") setActiveSection("home");
        if (name === "about") setActiveSection("about");
        if (name === "skills") setActiveSection("skills");
        if (name === "contact") setActiveSection("contact");
      }}
    />
  );
}