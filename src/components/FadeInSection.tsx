'use client';

import { motion } from 'framer-motion';

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }} // Startläge: Osynlig och lite längre ner
      whileInView={{ opacity: 1, y: 0 }} // Slutläge: Synlig och på rätt plats
      viewport={{ once: true, margin: '-100px' }} // Kör bara en gång, och trigga lite innan den når toppen
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
