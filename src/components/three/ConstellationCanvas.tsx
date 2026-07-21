"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const CITIES = [
  [-0.2, 0.35, 0],
  [0.05, 0.15, 0],
  [0.25, -0.05, 0],
  [-0.15, -0.2, 0],
  [0.1, -0.35, 0],
  [-0.35, 0.05, 0],
  [0.35, 0.25, 0],
  [0, 0, 0],
] as const;

function Network() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(
    () => CITIES.map((p) => new THREE.Vector3(...p)),
    []
  );

  const linePositions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 0.55) {
          arr.push(points[i].x, points[i].y, points[i].z);
          arr.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }
    return new Float32Array(arr);
  }, [points]);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.z = Math.sin(clock.elapsedTime * 0.08) * 0.05;
      group.current.rotation.y = clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={group} scale={1.8} position={[0.6, 0.1, 0]}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.018, 12, 12]} />
          <meshBasicMaterial color="#c9a227" />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0d6e4f" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

export function ConstellationCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 2.4], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Network />
    </Canvas>
  );
}
