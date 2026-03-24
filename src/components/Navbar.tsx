'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 z-50 flex justify-center p-4'>
      <div className='flex items-center gap-4 w-full max-w-5xl px-6 h-14 rounded-2xl bg-card-bg border border-card-border backdrop-blur-md shadow-lg'>
        <Link
          href='/'
          className='text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity'
        >
          <span className='text-accent-p'>PROJEKT</span>
          <span className='text-foreground'>.DB</span>
        </Link>

        <div className='flex items-center gap-6'>
          <ul className='hidden md:flex items-center gap-6 text-sm font-medium text-muted'>
            <li>
              <Link
                href='#projects'
                className='hover:text-accent-p transition-colors'
              >
                Projekt
              </Link>
            </li>
            <li>
              <Link
                href='#about'
                className='hover:text-accent-p transition-colors'
              >
                Om mig
              </Link>
            </li>
          </ul>
          <div className='pl-4 border-l border-card-border'>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
