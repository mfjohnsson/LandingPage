'use client';

import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconCopy,
  IconCheck,
} from '@tabler/icons-react';
import { useState } from 'react';

export default function ContactGrid() {
  const [copied, setCopied] = useState(false);
  const email = 'mfjohnsson@gmail.se';
  const linkedIn = 'https://www.linkedin.com/in/martin-johansson-b07957192/';
  const gitHub = 'https://github.com/mfjohnsson';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id='contact' className='py-20 max-w-5xl mx-auto px-4'>
      <div className='mb-10 text-center md:text-left'>
        <h2 className='text-3xl font-bold mb-4 tracking-tighter'>
          Sugen på att bygga något?
        </h2>
        <p className='text-muted max-w-md'>
          Jag är alltid öppen för nya projekt, samarbeten eller bara ett snack
          om tech. Hör av dig via någon av kanalerna nedan!
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-48'>
        {/* MAIL - Tar upp hälften av bredden */}
        <div className='md:col-span-2 bg-card-bg border border-card-border rounded-3xl p-8 flex flex-col justify-between group hover:border-accent-p/50 transition-all relative overflow-hidden'>
          <div className='flex justify-between gap-4 items-start relative z-10'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-accent-p mb-1'>
                Maila mig
              </p>
              <h3 className='text-xl md:text-2xl font-bold break-all'>
                {email}
              </h3>
            </div>
            <button
              onClick={copyToClipboard}
              className='p-3 bg-background border border-card-border rounded-2xl hover:text-accent-p transition-colors'
            >
              {copied ? (
                <IconCheck size={14} className='text-green-500' />
              ) : (
                <IconCopy size={14} />
              )}
            </button>
          </div>

          <a
            href={`mailto:${email}`}
            className='mb-4 flex gap-4 text-sm font-medium underline decoration-accent-p/30 underline-offset-4 hover:decoration-accent-p transition-all'
          >
            <IconMail /> Öppna mail-appen →
          </a>

          {/* Subtil gradient-glow i bakgrunden */}
          <div className='absolute -right-10 -bottom-10 w-32 h-32 bg-accent-p/5 blur-3xl group-hover:bg-accent-p/15 transition-colors rounded-full' />
        </div>

        {/* LINKEDIN */}
        <a
          href={linkedIn}
          target='_blank'
          className='md:col-span-1 bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col items-center justify-center gap-3 group hover:border-[#0077B5]/50 transition-all'
        >
          <div className='w-14 h-14 bg-[#0077B5]/10 rounded-2xl flex items-center justify-center text-[#0077B5] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,119,181,0)] group-hover:shadow-[0_0_15px_rgba(0,119,181,0.2)]'>
            <IconBrandLinkedin size={32} />
          </div>
          <span className='font-bold'>LinkedIn</span>
        </a>

        {/* GITHUB */}
        <a
          href={gitHub}
          target='_blank'
          className='md:col-span-1 bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col items-center justify-center gap-3 group hover:border-white/30 transition-all'
        >
          <div className='w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-foreground group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'>
            <IconBrandGithub size={32} />
          </div>
          <span className='font-bold'>GitHub</span>
        </a>
      </div>
    </section>
  );
}
