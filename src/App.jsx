import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './components/Cube'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />

      {/* Cube Component */}
      <Cube />

      {/* Controls */}
      <OrbitControls />
    </Canvas>
  )
}
