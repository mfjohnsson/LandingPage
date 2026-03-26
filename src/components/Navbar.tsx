'use client';

import ThemeSwitcher from './ThemeSwitcher';

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 z-50 flex justify-center p-4'>
      <div className='flex items-center gap-4 w-full max-w-5xl px-6 h-14 rounded-2xl bg-card-bg border border-card-border backdrop-blur-md shadow-lg'>
        <a
          href='#home'
          onClick={(e) => scrollToSection(e, 'home')}
          className='text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity'
        >
          <span className='text-accent-p'>PROJEKT</span>
          <span className='text-foreground'>.DB</span>
        </a>

        <div className='flex items-center gap-6'>
          <ul className='hidden md:flex items-center gap-6 text-sm font-medium text-muted'>
            <li>
              <a
                href='#projects'
                onClick={(e) => scrollToSection(e, 'projects')}
                className='hover:text-accent-p transition-colors'
              >
                Projekt
              </a>
            </li>
            <li>
              <a
                href='#about'
                onClick={(e) => scrollToSection(e, 'about')}
                className='hover:text-accent-p transition-colors'
              >
                Om mig
              </a>
            </li>
            <li>
              <a
                href='#contact'
                onClick={(e) => scrollToSection(e, 'contact')}
                className='hover:text-accent-p transition-colors'
              >
                Kontakt
              </a>
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
