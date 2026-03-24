'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    console.log('clicked');
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-xl bg-card-bg border border-card-border hover:scale-110 transition-all active:scale-95 flex items-center justify-center cursor-pointer group'
      aria-label='Toggle Theme'
    >
      {isDark ? (
        <Sun
          size={18}
          className='text-yellow-400 transition-colors group-hover:text-yellow-300'
        />
      ) : (
        <Moon
          size={18}
          className='text-accent-p transition-colors group-hover:text-accent-s'
        />
      )}
    </button>
  );
}
