import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audio';

interface FerrofluidCanvasProps {
  className?: string;
  intensity?: number;
}

export const FerrofluidCanvas: React.FC<FerrofluidCanvasProps> = ({
  className = '',
  intensity = 1.0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Create high-detail sphere for vertex deformation
    // 4 subdivisions gives ~2,562 vertices (silky smooth, super fast on mobile)
    const baseRadius = 1.55;
    const geometry = new THREE.IcosahedronGeometry(baseRadius, 5);
    const originalPositions = geometry.attributes.position.clone();

    // High-end liquid obsidian / metallic ferrofluid material
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x060608),
      roughness: 0.12,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      ior: 1.8,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Atmospheric Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x1a1a24, 1.2);
    scene.add(ambientLight);

    const rimLight1 = new THREE.DirectionalLight(0xe8e8f0, 3.2);
    rimLight1.position.set(5, 4, 3);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0xa0a5b5, 2.5);
    rimLight2.position.set(-5, -3, 2);
    scene.add(rimLight2);

    const topSpecular = new THREE.PointLight(0xffffff, 4.0, 10);
    topSpecular.position.set(0, 3.5, 3.5);
    scene.add(topSpecular);

    // Interaction tracking
    let pointerX = 0;
    let pointerY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let isDragging = false;
    let dragVelocityX = 0;
    let dragVelocityY = 0;
    let lastPointerX = 0;
    let lastPointerY = 0;

    let time = 0;
    let animationFrameId: number;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      sound.playClick();
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetPointerX = x;
      targetPointerY = y;

      if (isDragging) {
        const deltaX = (e.clientX - lastPointerX) * 0.005;
        const deltaY = (e.clientY - lastPointerY) * 0.005;
        mesh.rotation.y += deltaX;
        mesh.rotation.x += deltaY;
        dragVelocityX = deltaX;
        dragVelocityY = deltaY;
        lastPointerX = e.clientX;
        lastPointerY = e.clientY;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    const posAttr = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const origVertex = new THREE.Vector3();

    const animate = () => {
      time += 0.015;

      // Smooth pointer interpolation
      pointerX += (targetPointerX - pointerX) * 0.08;
      pointerY += (targetPointerY - pointerY) * 0.08;

      // Inertial spin
      if (!isDragging) {
        mesh.rotation.y += 0.004 + dragVelocityX;
        mesh.rotation.x += dragVelocityY;
        dragVelocityX *= 0.94;
        dragVelocityY *= 0.94;
      }

      // Dynamic Ferrofluid Deformation
      // Spiky harmonic deformation + magnetic pull towards pointer
      const positions = posAttr.array as Float32Array;
      const origPositions = originalPositions.array as Float32Array;
      const vertexCount = posAttr.count;

      const pullStrength = isDragging ? 1.6 : 0.85;
      const currentIntensity = intensity;

      for (let i = 0; i < vertexCount; i++) {
        const i3 = i * 3;
        origVertex.set(
          origPositions[i3],
          origPositions[i3 + 1],
          origPositions[i3 + 2]
        );

        // Normalize direction from center
        const dir = origVertex.clone().normalize();

        // 3D Harmonic Noise Simulation for Ferrofluid Spikes
        const f1 = Math.sin(origVertex.x * 3.2 + time * 1.8);
        const f2 = Math.cos(origVertex.y * 3.4 - time * 1.5);
        const f3 = Math.sin(origVertex.z * 3.1 + (origVertex.x + origVertex.y) * 1.2);
        
        // High frequency magnetic prickles
        const prickle = Math.sin(origVertex.x * 9.0 + time * 2.5) *
                        Math.cos(origVertex.y * 9.0 - time * 2.0) *
                        Math.sin(origVertex.z * 9.0);

        // Pointer proximity attraction
        const pointerDist = Math.hypot(dir.x - pointerX, dir.y - pointerY);
        const pointerPull = Math.max(0, 1.2 - pointerDist) * 0.45 * pullStrength;

        // Cumulative spike displacement
        const baseDisplacement = (f1 * f2 * f3) * 0.28 * currentIntensity;
        const spikeDisplacement = Math.max(0, prickle) * 0.22 * currentIntensity;
        const totalDisplacement = baseDisplacement + spikeDisplacement + pointerPull;

        // Apply deformation along vertex normal
        vertex.copy(origVertex).addScaledVector(dir, totalDisplacement);

        positions[i3] = vertex.x;
        positions[i3 + 1] = vertex.y;
        positions[i3 + 2] = vertex.z;
      }

      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [intensity]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D Canvas Mount */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none flex items-center justify-center"
        style={{ minHeight: '340px' }}
      />

      {/* Visceral Magnetic HUD Overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white/70 flex items-center gap-2 pointer-events-none rounded-full whitespace-nowrap">
        <span className={`w-1.5 h-1.5 rounded-full ${isInteracting ? 'bg-[#FF3300] animate-ping' : 'bg-emerald-400'}`} />
        <span>{isInteracting ? 'MAGNETIC DISTORTION ACTIVE' : 'FERROFLUID CORE • DRAG TO ENGAGE'}</span>
      </div>
    </div>
  );
};
