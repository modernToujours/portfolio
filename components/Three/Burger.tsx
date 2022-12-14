import { useFrame, useLoader } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Burger = ({
  position,
}: {
  position: [x: number, y: number, z: number];
}) => {
  const obj = useLoader(OBJLoader, "/s3/burger/burger.obj");

  const burger = useMemo(() => obj.clone(), [obj]);

  const ref = useRef<Mesh>(null);
  if (burger) {
    burger.traverse((child) => {
      if (child instanceof Mesh) {
        return (
          <mesh
            ref={ref}
            geometry={child.geometry}
            material={child.material}
            position={position}
            scale={0.4}
            rotation={position}
          />
        );
      }
    });
  }
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current!.rotation.x += 0.01;
    ref.current!.rotation.y += 0.01;
  });

  return (
    <primitive
      ref={ref}
      object={burger}
      position={position}
      scale={0.4}
      rotation={position}
    />
  );
};

export default Burger;
