import React from 'react';
import HeroCover from './components/HeroCover';
import Dialogue from './components/Dialogue';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <HeroCover />
      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Highlights />
        <Dialogue />
      </main>
      <Footer />
    </div>
  );
}
