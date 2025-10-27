import React from 'react';

const script = [
  { speaker: 'Interviewer', tone: 'boss', line: 'Please, have a seat.' },
  { speaker: 'Candidate', tone: 'candidate', line: 'Thank you, sir! I already have three seats at home, but I’ll sit here too. 😎' },
  { speaker: 'Interviewer', tone: 'boss', line: '(confused) Okay… So, tell me about yourself.' },
  { speaker: 'Candidate', tone: 'candidate', line: 'Myself Raju. I am multitasking person, sir — I can sleep and dream at the same time!' },
  { speaker: 'Interviewer', tone: 'boss', line: '…That’s… impressive? 😐 What’s your greatest strength?' },
  { speaker: 'Candidate', tone: 'candidate', line: 'My strength, sir, is Wi-Fi. Without Wi-Fi, I’m very weak.' },
  { speaker: 'Interviewer', tone: 'boss', line: '(facepalm) Hmm… and weakness?' },
  { speaker: 'Candidate', tone: 'candidate', line: 'Low battery, sir. When phone dead, I also dead inside. 🔋💀' },
  { speaker: 'Interviewer', tone: 'boss', line: '(trying to stay calm) Okay. Why should we hire you?' },
  { speaker: 'Candidate', tone: 'candidate', line: 'Because sir, aap hire nahi karoge toh main retire ho jaunga — career khatam! 😭' },
  { speaker: 'Interviewer', tone: 'boss', line: '(sighs) Do you have any experience?' },
  { speaker: 'Candidate', tone: 'candidate', line: 'Yes sir! 5 years experience in… downloading PDFs and closing pop-ups. 💻' },
  { speaker: 'Interviewer', tone: 'boss', line: '(laughing now) What salary do you expect?' },
  { speaker: 'Candidate', tone: 'candidate', line: 'Not much, sir… just something between Ambani and reality.' },
  { speaker: 'Interviewer', tone: 'boss', line: '😆 (laughs uncontrollably) You’re definitely something else.' },
  { speaker: 'Candidate', tone: 'candidate', line: 'Thank you, sir! So, when should I join?' },
  { speaker: 'Interviewer', tone: 'boss', line: '(wiping tears) After I recover from laughing, maybe never!' },
  { speaker: 'Candidate', tone: 'candidate', line: 'Perfect, sir. I’ll be waiting—unemployed but optimistic! 😄' },
];

function Bubble({ speaker, line, align }) {
  const isRight = align === 'right';
  return (
    <div className={`flex ${isRight ? 'justify-end' : 'justify-start'} w-full` }>
      <div className={`max-w-[90%] sm:max-w-[75%] md:max-w-[65%] rounded-2xl px-4 py-3 text-sm sm:text-base shadow-lg backdrop-blur ${isRight ? 'bg-orange-500/15 border border-orange-400/30 text-orange-50' : 'bg-neutral-800/60 border border-neutral-700 text-neutral-100'}`}>
        <div className="text-xs uppercase tracking-wide opacity-80 mb-1">
          {speaker}
        </div>
        <div className="leading-relaxed whitespace-pre-wrap">
          {line}
        </div>
      </div>
    </div>
  );
}

export default function Dialogue() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold">Scene: Office room</h2>
      <p className="text-neutral-300">The interviewer is sitting seriously; the candidate enters nervously but acts overconfident.</p>
      <div className="mt-6 space-y-4">
        {script.map((entry, idx) => (
          <Bubble
            key={idx}
            speaker={entry.speaker}
            line={entry.line}
            align={entry.speaker === 'Candidate' ? 'right' : 'left'}
          />
        ))}
      </div>
    </section>
  );
}
