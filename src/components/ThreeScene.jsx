import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas
      style={{ height: "400px", background: "#101010" }}
      camera={{ position: [0, 0, 10], fov: 50 }}>
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      {/* Shield Shape */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[3, 5, 3]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Lock Body */}
      <mesh position={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.8, 0.8, 2, 32]} />
        <meshStandardMaterial color="gold" />
      </mesh>

      {/* Lock Shackle */}
      <mesh position={[0, 1.8, 0.1]}>
        <torusGeometry args={[1.2, 0.2, 16, 100]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* Keyhole */}
      <mesh position={[0, -0.3, 0.1]}>
        <torusGeometry args={[0.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Orbit Controls for interaction */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
