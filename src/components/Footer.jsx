import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-800 bg-neutral-950/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} The Job Interview – Expert in Everything!</p>
        <p className="text-neutral-500">Dark retro workspace • Playful • Creative • Corporate</p>
      </div>
    </footer>
  );
}
