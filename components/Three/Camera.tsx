import { useFrame } from "@react-three/fiber";

const Camera = ({ angle = 0 }) => {
  useFrame(({ camera }) => {
    const posX = camera.position.x;
    const posY = camera.position.y;
    const posZ = camera.position.z;

    camera.position.x += (Math.sin((30 / 4) * angle) - posX) / 100;
    camera.position.y += (Math.sin((30 / 4) * angle) - posY) / 100;
    camera.position.z += (Math.sin((30 / 4) * angle) - (posZ - 3)) / 100;
  });
  return null;
};

export default Camera;
