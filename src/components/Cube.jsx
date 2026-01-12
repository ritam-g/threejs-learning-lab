// useRef = object ka reference lene ke liye
import { useRef } from 'react'
import * as THREE from 'three'
// useFrame = animation loop (requestAnimationFrame)
import { useFrame } from '@react-three/fiber'
import { BoxGeometry } from 'three'

export default function Cube() {

  // meshRef me cube ka reference store hota hai
  const meshRef = useRef(null)

  // useFrame har frame me run hota hai (60fps)
  useFrame(() => {

    // Safety check
    if (meshRef.current) {

      // Cube ko X axis par rotate karna
      meshRef.current.rotation.x += 0.01

      // Cube ko Y axis par rotate karna
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    // mesh = Geometry + Material (actual 3D object)
    <mesh ref={meshRef}>

      {/* BoxGeometry = cube ka shape */}
      <boxGeometry args={[1, 1, 1]} />
      

      {/* Material jo light ke sath react kare */}
      <meshStandardMaterial color="red" />

    </mesh>
  )
}
