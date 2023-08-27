import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame} from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import './Stars.css'

const Stars = (props) => {

  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 45;
  })

  return (
  <group>
    <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
      <PointMaterial 
      transparent
      color="#f272c8"
      size={0.002}
      sizeAttenuation={true}
      depthWrite={false}
      />
    </Points>
  </group>
  )
}

export default function StarsCanvas() {
  return (
    <div className='StarsCanvas'>
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />

      </Canvas>
    </div>
  )
}