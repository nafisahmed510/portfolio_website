import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Technology categories with their configurations
const technologies = {
  frontend: {
    color: '#00ff87',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Tailwind'],
    radius: 4,
    speed: 0.2,
  },
  backend: {
    color: '#ff3366',
    items: ['Node.js', 'Python', 'Java'],
    radius: 3,
    speed: 0.15,
  },
  database: {
    color: '#ffaa00',
    items: ['PostgreSQL', 'MySQL'],
    radius: 2.5,
    speed: 0.1,
  },
  devops: {
    color: '#00aaff',
    items: ['AWS', 'Azure', 'Google Cloud', 'GitLab CI/CD'],
    radius: 3.5,
    speed: 0.25,
  },
};

// Component for rendering technology spheres
function TechSphere({ category, items, color, radius, speed }) {
  const groupRef = useRef();
  const particlesRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Initialize particle positions in a spherical arrangement
  useEffect(() => {
    items.forEach((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / items.length);
      const theta = Math.sqrt(items.length * Math.PI) * phi;
      particlesRef.current[i] = {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      };
    });
  }, [items, radius]);

  // Animate sphere rotation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * speed;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((tech, i) => (
        <group 
          key={tech} 
          position={[particlesRef.current[i]?.x || 0, particlesRef.current[i]?.y || 0, particlesRef.current[i]?.z || 0]}
          onPointerOver={() => setHoveredIndex(i)}
          onPointerOut={() => setHoveredIndex(null)}
        >
          {/* Technology sphere */}
          <mesh scale={hoveredIndex === i ? 1.2 : 1}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshPhongMaterial color={color} />
          </mesh>
          {/* Technology label */}
          <Text
            position={[0.2, 0.2, 0.2]}
            fontSize={0.3}
            color={color}
            anchorX="left"
            anchorY="middle"
            scale={hoveredIndex === i ? 1.2 : 1}
          >
            {tech}
          </Text>
        </group>
      ))}
    </group>
  );
}

// Component for rendering the background globe
function Globe() {
  return (
    <mesh>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshPhongMaterial
        color="#ffffff"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

// Component for rendering background particles
function Particles() {
  const particlesRef = useRef();
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);

  // Initialize particle positions in a spherical distribution
  useEffect(() => {
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
  }, []);

  // Animate particles rotation
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00ff00"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main TechGlobe component
export function TechGlobe() {
  return (
    <div className="w-full h-[600px] relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001a00] to-transparent opacity-50 pointer-events-none" />
      
      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Scene components */}
        <Globe />
        <Particles />
        
        {/* Technology spheres */}
        {Object.entries(technologies).map(([key, { items, color, radius, speed }]) => (
          <TechSphere
            key={key}
            category={key}
            items={items}
            color={color}
            radius={radius}
            speed={speed}
          />
        ))}
        
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}