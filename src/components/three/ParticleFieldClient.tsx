"use client";

import dynamic from "next/dynamic";

const GlobalParticleField = dynamic(
  () => import("@/components/three/GlobalParticleField"),
  { ssr: false }
);

export default function ParticleFieldClient() {
  return <GlobalParticleField />;
}
