import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-neutral-950/30 via-neutral-950/40 to-neutral-950" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300 shadow-sm">
            <Rocket className="h-4 w-4" />
            A playful corporate skit
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(255,100,0,0.25)]">
            The Job Interview – Expert in Everything!
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-200/90 max-w-2xl mx-auto">
            Dark, retro-tech workspace vibes meet laugh-out-loud dialogue.
          </p>
        </div>
      </div>
    </section>
  );
}
