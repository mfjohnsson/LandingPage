'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FlipCardProps {
  frontImageSrc: string;
  frontImageAlt: string;
  backContent: React.ReactNode;
}

export default function FlipCard({
  frontImageSrc,
  frontImageAlt,
  backContent,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // Öka perspektivet lite för snyggare 3D-effekt
    <div
      className='relative w-48 h-48 cursor-pointer'
      style={{ perspective: '1200px' }}
      onClick={() => setIsFlipped(!isFlipped)} // Flippa vid klick på hela ytan
    >
      <motion.div
        className='w-full h-full relative'
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, bounce: 0.2, type: 'spring' }}
      >
        {/* FRAMSIDA */}
        <div
          className='absolute inset-0 w-full h-full'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className='absolute inset-0 rounded-full border-4 border-accent-p/20 animate-pulse' />
          <Image
            src={frontImageSrc}
            alt={frontImageAlt}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='rounded-full border-4 border-accent-p/80 object-cover z-10'
          />
        </div>

        {/* BAKSIDA */}
        <div
          className='absolute inset-0 w-full h-full bg-[#1a1a2e8f] rounded-full border-4 border-accent-p flex flex-col items-center justify-center text-center p-6'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)', // Viktigt: deg, inte px!
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}
