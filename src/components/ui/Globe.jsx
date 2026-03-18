import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Globe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const size = 500;
    renderer.setSize(size, size);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(15, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 40;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xFBF5B7,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 40;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      globe.rotation.x += 0.001;
      particlesMesh.rotation.y -= 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div ref={mountRef} className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center -ml-16 md:ml-0" />
    </div>
  );
};
