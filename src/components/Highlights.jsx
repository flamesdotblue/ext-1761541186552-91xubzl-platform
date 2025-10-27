import React from 'react';
import { Briefcase, Wifi, BatteryLow, Coffee, Laugh } from 'lucide-react';

const items = [
  {
    icon: Briefcase,
    title: 'Corporate comedy',
    text: 'A boss-type interviewer meets an overconfident yet confused candidate.'
  },
  {
    icon: Wifi,
    title: 'Relatable tech jokes',
    text: 'Strength: Wi‑Fi. Weakness: Low battery. We’ve all been there.'
  },
  {
    icon: BatteryLow,
    title: 'Low battery energy',
    text: 'When the phone dies, the soul logs out. Efficiency: 0%.'
  },
  {
    icon: Coffee,
    title: 'Retro-tech setting',
    text: 'Dark desk, orange lamp, old-school monitor—cozy and creative.'
  },
];

export default function Highlights() {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold">About this scene</h2>
      <p className="text-neutral-300 mt-2">Playful, creative, and a little bit corporate—just the way we like it.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((it, idx) => (
          <div key={idx} className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-orange-500/50 hover:bg-neutral-900/80 transition-colors">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-orange-500/15 p-3 text-orange-300 ring-1 ring-orange-400/20">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="text-neutral-300 mt-1">{it.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-300">
        <Laugh className="h-4 w-4 text-orange-300" />
        Laughs guaranteed. Hiring, optional.
      </div>
    </section>
  );
}
