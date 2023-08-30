import './Contact.css'
import ContactForm from './ContactForm';
import { Canvas } from '@react-three/fiber'
import { Text } from "@react-three/drei";
import { useState } from 'react';

export default function About() {

  const [rotation, setRotation] = useState([0, 0, 0, 0]);

    // Handlers:
  const onMouseMove = e => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 7,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 7,
      0
    ]);
  };

    return <div className="centerDiv-4">
      <div className="contactText">
        <div className="threedContact" onMouseMove={onMouseMove}>
        <Canvas pixelRatio={window.devicePixelRatio} >
      <pointLight position={[5, 5, 5]} />
      <Text
        scale={[1, 1, 1]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        rotation={rotation}
      >
        contact me.
      </Text>
    </Canvas>
        </div>
      </div>
      <div className="contactWrapper">
        <ContactForm />
      </div>
    </div>
}