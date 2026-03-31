'use client';

import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className='group relative p-6 rounded-3xl bg-card-bg border border-card-border hover:border-accent-p/50 transition-colors overflow-hidden'
    >
      <div className='absolute -right-10 -top-10 w-32 h-32 bg-accent-p/10 blur-3xl group-hover:bg-accent-p/20 transition-colors rounded-full' />

      <div className='relative z-10'>
        <div className='flex justify-between items-start mb-4'>
          <h3 className='text-xl font-bold text-foreground'>{title}</h3>
          <div className='flex gap-3 text-muted'>
            {github && (
              <a
                href={github}
                className='hover:text-accent-p ml-4 transition-colors'
              >
                <IconBrandGithub size={20} />
              </a>
            )}
            <a href={link} className='hover:text-accent-p transition-colors'>
              <IconExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className='text-muted text-sm mb-6 leading-relaxed'>{description}</p>

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
