'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

// En hjälpfunktion som kollar om vi är i webbläsaren
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!isMounted) return <div className='w-14 h-8' />;

  const isDark = theme === 'dark';

  return (
    <div
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        relative w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300
        ${isDark ? 'bg-accent-p/20 border-accent-p/50' : 'bg-card-bg border-card-border'}
        border
      `}
    >
      {/* Ikoner som ligger under knappen för extra detaljrikedom */}
      <div className='absolute inset-0 flex justify-between items-center px-2 pointer-events-none'>
        <Moon
          size={12}
          className={`${isDark ? 'text-accent-p' : 'text-muted/30'}`}
        />
        <Sun
          size={12}
          className={`${isDark ? 'text-muted/30' : 'text-orange-500'}`}
        />
      </div>
      {/* Den rörliga knappen (The Thumb) */}
      <motion.div
        className='z-10 w-6 h-5 bg-foreground rounded-full shadow-lg flex items-center justify-center'
        initial={false}
        animate={{
          x: isDark ? 22 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* En mini-ikon inuti själva knappen om man vill ha det */}
        {isDark ? (
          <div className='w-4 h-3 border-2 border-background rounded-full' />
        ) : (
          <div className='w-4 h-3 border-2 border-background rounded-full' />
        )}
      </motion.div>
    </div>
  );
}
