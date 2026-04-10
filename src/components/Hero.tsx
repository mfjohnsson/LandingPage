'use client';

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 text-center'>
      {/* En subtil glow-effekt i bakgrunden */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-accent-p/20 blur-[120px] rounded-full -z-10' />

      <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-6'>
        Bygger
        <span className='bg-linear-to-r from-accent-p to-accent-s bg-clip-text text-transparent'>
          framtidens
        </span>
        webb
      </h1>

      <p className='max-w-2xl text-lg md:text-xl text-muted mb-10 leading-relaxed'>
        Fullstack-utvecklare med passion för design, AI, ljud och spel. Just nu
        fokuserad på Next.js, .NET, AI-verktyg och Spelutveckling.
      </p>

      <div className='flex gap-4'>
        <a
          href='#projects'
          onClick={(e) => scrollToSection(e, 'projects')}
          className='px-8 py-3 rounded-full bg-accent-p text-white font-semibold hover:scale-105 transition-transform'
        >
          Se projekt
        </a>
        <a
          href='#contact'
          onClick={(e) => scrollToSection(e, 'contact')}
          className='px-8 py-3 rounded-full bg-card-bg border-2 border-card-border font-semibold hover:scale-105 transition-transform'
        >
          Säg hej!
        </a>
      </div>
    </div>
  );
}
