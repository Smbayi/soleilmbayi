"use client";

import dynamic from "next/dynamic";

const ConstellationCanvas = dynamic(
  () =>
    import("@/components/three/ConstellationCanvas").then(
      (m) => m.ConstellationCanvas
    ),
  { ssr: false, loading: () => null }
);

export function SceneBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
      aria-hidden
    >
      <ConstellationCanvas />
      <div className="african-pattern absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
    </div>
  );
}
