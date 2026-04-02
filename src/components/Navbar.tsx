'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import ThemeSwitcher from './ThemeSwitcher';

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true); // Kontrollerar om navbaren är öppen

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsExpanded(false); // Stäng när man scrollar ner
      } else {
        setIsExpanded(true); // Öppna när man är högst upp (Hero)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 flex  p-4 pointer-events-none'>
      {/* Vi använder motion.div för att animera bredden på själva "piller-containern" 
        pointer-events-auto behövs för att man ska kunna klicka på navbaren trots att nav-taggen är transparent
      */}
      <motion.div
        initial={false}
        animate={{ width: isExpanded ? 'auto' : '160px' }}
        className='flex items-center gap-4 h-14 rounded-2xl bg-card-bg border border-card-border backdrop-blur-md shadow-lg px-4 overflow-hidden pointer-events-auto'
      >
        {/* LOGO & TOGGLE */}
        <div className='flex items-center gap-2 shrink-0'>
          <a
            href='#home'
            onClick={(e) => scrollToSection(e, 'home')}
            className='text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity'
          >
            <span className='text-accent-p'>PROJEKT</span>
            <span className='text-foreground'>.DB</span>
          </a>

          {/* PIL-KNAPPEN */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='p-1 hover:bg-accent-p/10 rounded-lg text-muted hover:text-accent-p transition-all'
          >
            {isExpanded ? (
              <IconChevronLeft size={18} />
            ) : (
              <IconChevronRight size={18} />
            )}
          </button>
        </div>

        {/* INNEHÅLLET SOM GÅR ATT STÄNGA */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className='flex items-center gap-6'
            >
              <div className='h-6 w-px bg-card-border mx-2' />{' '}
              {/* En liten vertikal avdelare */}
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
