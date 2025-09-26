import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Environment } from '@react-three/drei';
import { RotateCcw, ZoomIn, ZoomOut, Move3D } from 'lucide-react';
import * as THREE from 'three';

// Placeholder 3D model component
const ModelComponent = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      {/* Main Car Body */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[3, 0.8, 1.2]} />
        <meshStandardMaterial 
          color={hovered ? "#dc2626" : "#991b1b"} 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Front Wing */}
      <mesh position={[1.8, -0.2, 0]}>
        <boxGeometry args={[0.4, 0.1, 1.8]} />
        <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Rear Wing */}
      <mesh position={[-1.8, 0.6, 0]}>
        <boxGeometry args={[0.2, 0.4, 1.6]} />
        <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Wheels */}
      {[
        [-1.2, -0.4, 0.8],
        [-1.2, -0.4, -0.8],
        [1.2, -0.4, 0.8],
        [1.2, -0.4, -0.8]
      ].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      ))}
      
      {/* Model Label */}
      <Text
        position={[0, 2, 0]}
        fontSize={0.5}
        color="#dc2626"
        anchorX="center" 
        anchorY="middle"
        font="/fonts/rajdhani-bold.woff"
      >
        Alpha-Design F1 Concept
      </Text>
    </group>
  );
};

const Model = () => {
  const [controlsRef, setControlsRef] = useState<any>(null);

  const resetCamera = () => {
    if (controlsRef) {
      controlsRef.reset();
    }
  };

  const zoomIn = () => {
    if (controlsRef) {
      controlsRef.dollyIn(1.2);
      controlsRef.update();
    }
  };

  const zoomOut = () => {
    if (controlsRef) {
      controlsRef.dollyOut(1.2);
      controlsRef.update();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-rajdhani font-bold hero-text mb-4">
            3D Model Viewer
          </h1>
          <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
            Interactive 3D visualization of the Alpha-Design Formula 1 concept. 
            Drag to rotate, scroll to zoom, and explore every detail.
          </p>
        </div>

        {/* 3D Model Viewer */}
        <div className="max-w-6xl mx-auto">
          <div className="model-viewer h-[600px] md:h-[700px] relative">
            {/* Canvas */}
            <Canvas
              camera={{ position: [5, 2, 5], fov: 50 }}
              className="w-full h-full"
            >
              <Suspense fallback={null}>
                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                <pointLight position={[0, 5, 0]} intensity={0.8} color="#dc2626" />
                
                {/* Environment */}
                <Environment preset="studio" />
                
                {/* 3D Model */}
                <ModelComponent />
                
                {/* Controls */}
                <OrbitControls
                  ref={setControlsRef}
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  minDistance={3}
                  maxDistance={15}
                  maxPolarAngle={Math.PI / 2}
                />
              </Suspense>
            </Canvas>

            {/* Control Buttons */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button
                onClick={resetCamera}
                className="p-3 bg-card border border-border rounded-lg hover:bg-accent transition-racing"
                title="Reset View"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={zoomIn}
                className="p-3 bg-card border border-border rounded-lg hover:bg-accent transition-racing"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={zoomOut}
                className="p-3 bg-card border border-border rounded-lg hover:bg-accent transition-racing"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <Move3D className="w-5 h-5 text-primary" />
                <span className="font-rajdhani font-semibold">Controls</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Drag to rotate</div>
                <div>• Scroll to zoom</div>
                <div>• Right-click to pan</div>
              </div>
            </div>
          </div>

          {/* Model Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="racing-card p-6 text-center">
              <h3 className="text-xl font-rajdhani font-semibold mb-3 text-primary">
                Specifications
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Length: 5.2m</div>
                <div>Width: 2.0m</div>
                <div>Height: 1.0m</div>
                <div>Weight: 740kg</div>
              </div>
            </div>

            <div className="racing-card p-6 text-center">
              <h3 className="text-xl font-rajdhani font-semibold mb-3 text-secondary">
                Materials
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Carbon Fiber Body</div>
                <div>Titanium Components</div>
                <div>Aluminum Chassis</div>
                <div>Advanced Composites</div>
              </div>
            </div>

            <div className="racing-card p-6 text-center md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-rajdhani font-semibold mb-3 text-metallic">
                Performance
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Top Speed: 350+ km/h</div>
                <div>0-100: 2.6 seconds</div>
                <div>Downforce: 1,500kg</div>
                <div>Power: 1,000 HP</div>
              </div>
            </div>
          </div>

          {/* Note about STL */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground font-inter">
              * This is a conceptual 3D model. The actual STL file will be loaded from /public/model.stl when available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;