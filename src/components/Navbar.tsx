'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft } from '@tabler/icons-react';
import ThemeSwitcher from './ThemeSwitcher';

type Mode = 'auto' | 'manual-expanded' | 'manual-collapsed';

export default function Navbar() {
  const [mode, setMode] = useState<Mode>('auto');
  const [autoExpanded, setAutoExpanded] = useState(true);

  const isExpanded =
    mode === 'auto' ? autoExpanded : mode === 'manual-expanded' ? true : false;

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 10;

      if (atTop) {
        setMode('auto');
        setAutoExpanded(true);
        return;
      }

      if (mode === 'auto') {
        setAutoExpanded(window.scrollY <= 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    if (id === 'home') {
      setMode('auto');
      setAutoExpanded(true);
    } else {
      setMode('manual-expanded');
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleManualToggle = () => {
    if (isExpanded) {
      setMode('auto');
      setAutoExpanded(false);
    } else {
      setMode('manual-expanded');
    }
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50 flex p-4 pointer-events-none'>
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
          mass: 1,
        }}
        className='flex items-center gap-4 h-14 rounded-2xl bg-card-bg border border-card-border backdrop-blur-md shadow-lg px-4 overflow-hidden pointer-events-auto w-auto'
      >
        <div className='flex items-center gap-2 shrink-0'>
          <a
            href='#home'
            onClick={(e) => handleLinkClick(e, 'home')}
            className='text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity flex items-center'
          >
            <span className='text-accent-p'>PROJEKT</span>
            <span className='text-foreground'>.DB</span>
          </a>

          <button
            onClick={handleManualToggle}
            className='p-1 hover:bg-accent-p/10 rounded-lg text-muted hover:text-accent-p transition-all ml-1'
          >
            <motion.div
              animate={{ rotate: isExpanded ? 0 : 180 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              <IconChevronLeft size={18} />
            </motion.div>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              animate={{
                width: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                width: {
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                  mass: 0.9,
                },
                opacity: { duration: 0.15, ease: 'easeInOut' },
              }}
              style={{ overflow: 'hidden' }}
              className='flex items-center gap-6'
            >
              <div className='h-6 w-px bg-card-border mx-2 shrink-0' />
              <ul className='hidden md:flex items-center gap-6 text-sm font-medium text-muted shrink-0'>
                <li>
                  <a
                    href='#projects'
                    onClick={(e) => handleLinkClick(e, 'projects')}
                    className='hover:text-accent-p transition-colors'
                  >
                    Projekt
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    onClick={(e) => handleLinkClick(e, 'about')}
                    className='hover:text-accent-p transition-colors'
                  >
                    Om mig
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    onClick={(e) => handleLinkClick(e, 'contact')}
                    className='hover:text-accent-p transition-colors'
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
              <div className='pl-4 border-l border-card-border shrink-0'>
                <ThemeSwitcher />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
