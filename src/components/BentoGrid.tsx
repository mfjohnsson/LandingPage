import Image from 'next/image';
import FlipCard from '@/components/FlipCard';
import { MapPin, Calendar, Code2 } from 'lucide-react';

export default function BentoGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-150'>
      {/* Stor ruta - Vem är jag? */}
      <div className='md:col-span-2 md:row-span-2 bg-card-bg border border-card-border rounded-3xl p-8 flex flex-col group'>
        {/* Bilden - Nu med flip-funktion! */}
        <div className='mb-6 w-full flex justify-center'>
          <FlipCard
            frontImageSrc='/death.png'
            frontImageAlt='Martin Johansson'
            backContent={
              <div className='text-sm text-muted'>
                <h3 className='font-bold text-[20px] text-white mb-2 underline'>
                  Snabbfakta
                </h3>
                <ul className='text-left space-y-1'>
                  <li className='flex items-center gap-3 text-muted'>
                    <MapPin size={14} className='text-accent-p' />
                    <span className='text-xs '>Kalmar, Sverige</span>
                  </li>
                  <li className='flex items-center gap-3 text-muted'>
                    <Calendar size={14} className='text-accent-p' />
                    <span className='text-xs'>1991</span>
                  </li>
                  <li className='flex items-center gap-3 text-muted'>
                    <Code2 size={14} className='text-accent-p' />
                    <span className='text-xs'>Developer</span>
                  </li>
                </ul>
              </div>
            }
          />
        </div>

        <h2 className='text-2xl font-bold mb-2'>Martin Johansson</h2>
        <p className='text-muted leading-relaxed'>
          Jag är en utvecklare som drivs av att bygga nya lösningar, skapa
          världar och meningsfulla upplevelser. Om det så är inom design, musik
          eller spel så är målet detsamma.
        </p>
      </div>

      {/* Bred ruta - Tech Stack */}
      <div className='md:col-span-2 bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col justify-center'>
        <h4 className='text-xs font-bold uppercase tracking-widest text-accent-p mb-4'>
          Verktygslåda
        </h4>
        <div className='flex flex-wrap gap-3'>
          {[
            'Next.js',
            'React',
            'Tailwind',
            'TypeScript',
            'javaScript',
            'HTML',
            'CSS',
            'Node.js',
            'ASP.NET Core',
            'Scrum',
            'Azure',
            'AI',
          ].map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 bg-background border border-card-border rounded-lg text-sm'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Liten ruta - Plats */}
      <a
        href='https://www.google.com/maps/place/Kalmar/@56.6744,16.3134,12z'
        target='_blank'
        rel='noopener noreferrer'
        className='relative md:col-span-1 bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col items-center justify-center text-center group overflow-hidden transition-all hover:border-accent-p/50'
      >
        {/* Texten - vi lägger till en liten pil eller effekt vid hover */}
        <div className='relative text- z-10 transition-transform group-hover:scale-105'>
          {/* En liten diskret text som dyker upp vid hover */}
          <div className='text-[10px] opacity-0 group-hover:opacity-80 transition-opacity mt-2'>
            <p className='text-sm font-medium'>Baserad i</p>
            <p className='text-xs'>Sverige, Kalmar</p>
            <p>Visa på karta →</p>
            <span className='absolute text-3xl mb-1 left-12.5 top-16'>📍</span>
          </div>
        </div>

        <Image
          src='/swe-kalmar.png'
          alt='Kalmar'
          fill
          priority
          sizes='(max-width: 768px) 100vw, 25vw'
          className='opacity-90 group-hover:opacity-70 object-cover rounded-3xl transition-opacity'
        />
      </a>

      {/* Liten ruta - Status */}
      <div className='md:col-span-1 bg-accent-p/10 border border-accent-p/20 rounded-3xl p-6 flex flex-col items-center justify-center text-center group'>
        <div className='relative w-12 h-12 mb-2'>
          <div className='absolute inset-0 bg-accent-p rounded-full animate-ping opacity-20'></div>
          <div className='relative bg-accent-p w-12 h-12 rounded-full flex items-center justify-center text-white italic font-black'>
            JS
          </div>
        </div>
        <p className='text-sm font-medium'>Just nu</p>
        <p className='text-accent-p text-xs font-bold'>
          Bygger Spel, Webbprojekt och backend lösningar.
        </p>
      </div>
    </div>
  );
}
