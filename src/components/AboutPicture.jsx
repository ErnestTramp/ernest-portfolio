import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, useTexture } from "@react-three/drei";
import { easing } from "maath";

function Image({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const texture = useTexture(url);

  // Calculate the aspect ratio of the image
  const aspectRatio = texture.image.width / texture.image.height / 1.25;

  useFrame((state, delta) => {
    easing.damp(
      ref.current.material,
      "distort",
      hovered ? 0.5 : 0,
      0.25,
      delta
    );
    easing.damp(ref.current.material, "speed", hovered ? 0.1 : 0, 0.25, delta);
    easing.dampE(
      ref.current.rotation,
      clicked ? [0, 0, 0.1] : [0, 0, 0],
      0.25,
      delta
    );

    // Adjust the scale to maintain aspect ratio
    const scaleFactor = 10;
    ref.current.scale.set(scaleFactor * aspectRatio, scaleFactor, 1);

    easing.dampC(
      ref.current.material.color,
      clicked ? "#fff" : "white",
      0.25,
      delta
    );
  });

  return (
    <mesh
      ref={ref}
      onClick={(e) => (e.stopPropagation(), click(!clicked))}
      onPointerOver={(e) => (e.stopPropagation(), hover(true))}
      onPointerOut={(e) => (e.stopPropagation(), hover(false))}
      {...props}
    >
      <planeGeometry args={[1 * aspectRatio, 1, 64, 64]} />
      <MeshDistortMaterial map={texture} speed={0.4} toneMapped={false} />
    </mesh>
  );
}

export default function AboutPicture() {
  return (
    <Canvas camera={{ position: [0, 0, 12] }}>
      <ambientLight intensity={1} />
      <Image url="/option3.jpg" position={[0, 0, 0]} />
    </Canvas>
  );
}
