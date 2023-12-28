import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './Model';

const GlobeModel = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <OrbitControls target={[0, 0, 0]} maxPolarAngle={2} enableZoom={false} /> 
        <PerspectiveCamera makeDefault fov={innerWidth/innerHeight} position={[-30, 50, 70]} />

        <hemisphereLight intensity={1.5} position={[0, 10, 0]} color={"#ffffff"} />
        <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/rainforest_trail_2k.hdr'} />
        <Model />

      </Suspense>
    </Canvas>
  )
}

export default GlobeModel;