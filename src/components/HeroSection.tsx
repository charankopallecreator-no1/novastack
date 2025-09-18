import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const GeometricShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <group>
      {/* Main distorted sphere */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      
      {/* Floating cube */}
      <mesh position={[2, 1, 0]} rotation-y={Math.PI * 0.25}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Small torus */}
      <mesh position={[-1.5, -1, 0.5]} rotation-x={Math.PI * 0.5}>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial color="#06d6a0" metalness={0.8} roughness={0.1} />
      </mesh>
    </group>
  );
};

const HeroSection = () => {
  // Force rebuild to clear heroImage cache issue
  return (
    <section id="home" className="min-h-screen relative overflow-hidden gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Tagline with animated elements */}
            <div className="space-y-4">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-gradient-card px-4 py-2 rounded-full border border-border/50"
              >
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm text-accent font-medium">Professional Web Development</span>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-primary bg-clip-text text-transparent">NovaStack</span>
                <br />
                <span className="text-foreground">Code. Create.</span>
                <br />
                <span className="text-accent">Elevate.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Transform your ideas into stunning digital experiences. 
                We build modern, scalable websites with agency quality and freelancer flexibility.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent/10 transition-smooth group"
                asChild
              >
                <Link to="/projects">
                  <Code2 size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Scene */}
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="relative h-[500px] w-full"
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              className="rounded-2xl shadow-card"
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
              
              <GeometricShape />
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={1}
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={Math.PI / 3}
              />
            </Canvas>
            
            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center z-10"
            >
              <Code2 size={24} className="text-white" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                x: [-5, 5, -5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full shadow-glow z-10"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;