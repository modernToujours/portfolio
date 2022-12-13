import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import Burger from "./Burger";
import Camera from "./Camera";

const MyCanvas = ({ angle }: { angle: number }) => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        width: "100%",
        height: "1000px",
        zIndex: "-10",
      }}
      camera={{ position: [0, 0, 3], fov: 50 }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Burger position={[1, 1.4, 0.3]} />
        <Burger position={[-1, -0.6, -0.1]} />
        <Burger position={[-1.2, 0.4, 0.4]} />
        <Burger position={[1.4, -0.7, -0.2]} />
        <Burger position={[0, 0, 1]} />
        <Burger position={[-2, 0.2, 0]} />
        <Burger position={[-0, 1.5, 0.4]} />
        <Camera angle={angle} />
      </Suspense>
    </Canvas>
  );
};

export default MyCanvas;
