'use client';

import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
  image,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className='group relative p-6 rounded-3xl bg-card-bg border border-card-border hover:border-accent-p/50 transition-colors overflow-hidden'
    >
      {/* 1. BILD-SEKTIONEN (Visas bara om image finns) */}
      {image && (
        <a
          href={link}
          target='_blank' // Öppna i ny flik
          rel='noopener noreferrer'
          className='hover:text-accent-p transition-colors'
        >
          <div className='relative w-full h-40 mb-6 overflow-hidden rounded-2xl border border-card-border/50'>
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              sizes='(max-width: 768px) 100vw, 33vw'
              className='group-hover:scale-105 transition-transform duration-300' // Liten zoom vid hover
            />
          </div>
        </a>
      )}

      {/* 2. TEXT-SEKTIONEN (Samma som tidigare, men med mindre mb på p) */}
      <div className='relative z-10'>
        <div className='flex justify-between items-start mb-4'>
          <h3 className='text-xl font-bold text-foreground'>{title}</h3>
          <div className='flex gap-3 text-muted'>
            {github && (
              <a
                href={github}
                target='_blank' // Öppna i ny flik
                rel='noopener noreferrer'
                className='hover:text-accent-p transition-colors'
              >
                <IconBrandGithub size={20} />
              </a>
            )}
            <a
              href={link}
              target='_blank' // Öppna i ny flik
              rel='noopener noreferrer'
              className='hover:text-accent-p transition-colors'
            >
              <IconExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className='text-muted text-sm mb-5 leading-relaxed'>{description}</p>

        {/* Taggar (Samma som tidigare) */}
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-p/10 text-accent-p border border-accent-p/20'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
